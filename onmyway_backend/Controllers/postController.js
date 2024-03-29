const moment = require('moment')
const Post = require('../Models/posts')

module.exports.getPosts = async (req, res) => {
    const user = req.user
    const posts = await Post.find({
        $or: [
            { "prefferedGender": user.gender },
            { "prefferedGender": "any" }
        ]
    }).and({
        $or: [
            { 'repeat': true },
            { 'date': { $gte: moment().format() } }
        ]
    }).and({ 'remainingSeats': { $gt: 0 } }).populate('owner')
    res.send({ "success": true, "results": posts.filter((i) => i.owner.status == 'active') })
}

module.exports.getUserPosts = async (req, res) => {
    const user = req.user
    const posts = await Post.find({ "owner": user._id }).populate('joinRequests.joined').populate('owner')
    res.send({ "success": true, "results": posts })
}

module.exports.getJoinedPosts = async (req, res) => {
    const user = req.user
    const posts = await Post.find({ "joinRequests.joined": user._id }).populate('owner')
    res.send({ "success": true, "results": posts })
}

module.exports.getJoinRequests = async (req, res, next) => {
    const post = await Post.findById(req.params.id).populate('joinRequests.joined')
    return res.send({ "success": true, "results": post })
}

module.exports.addPosts = async (req, res) => {
    const posts = new Post({
        "from": req.body.from,
        "to": req.body.to,
        "days": req.body.days,
        "date": req.body.date,
        "repeat": req.body.repeat,
        "departureTime": req.body.departureTime,
        "returnTime": req.body.returnTime,
        "remainingSeats": req.body.availableSeats,
        "preferredGender": req.body.preferredGender,
        "shareExpenses": req.body.shareExpenses,
        "owner": req.user,
        "comment": req.body.comment
    })
    const result = await posts.save()
    res.send({ "success": true, "results": result })
}

module.exports.updatePosts = async (req, res) => {
    const posts = await Post.findByIdAndUpdate(req.params.id, {
        "from": req.body.from,
        "to": req.body.to,
        "days": req.body.days,
        "date": req.body.date,
        "repeat": req.body.repeat,
        "departureTime": req.body.departureTime,
        "returnTime": req.body.returnTime,
        "remainingSeats": req.body.remainingSeats,
        "preferredGender": req.body.prefferedGender,
        "shareExpenses": req.body.shareExpenses,
        "owner": req.user,
        "comment": req.body.comment
    }, { new: true, runValidators: true })
    res.send({ "success": true, "results": posts })
}

module.exports.deletePosts = async (req, res) => {
    const posts = await Post.findByIdAndDelete(req.params.id)
    res.send({ "success": true, "results": posts })
}

module.exports.joinPosts = async (req, res) => {
    const post = await Post.findById(req.params.id)
    if (post.remainingSeats) {
        post.joinRequests.push({ 'joined': req.user })
        const result = await post.save()
        return res.send({ "success": true, "results": result })
    }
    return res.send({ "success": false, "results": result, "message": "no empty seats" })
}

module.exports.quitPosts = async (req, res) => {
    const post = await Post.findById(req.params.id).populate('joinRequests.joined')
    let quitCount = 0
    for (let i = 0; i < post.joinRequests.length; i++) {
        if (post.joinRequests[i].joined.id == req.user.id)
            if (post.joinRequests[i].status == 'approved') {
                post.joinRequests.splice(i, 1) && quitCount++
                post.remainingSeats += 1
            } else {
                post.joinRequests.splice(i, 1) && quitCount++
            }
    }
    if (quitCount) {
        const result = await post.save()
        return res.send({ "success": true, "results": result })
    }
    return res.send({ "success": false })
}

module.exports.approveDeclinePosts = async (req, res) => {
    const { user_id, post_id, status } = req.params
    const post = await Post.findById(post_id).populate('joinRequests.joined')
    if (post.remainingSeats == 0 && status == 'approved')
        return res.send({ "success": false, "message": "no enough seats" })
    for (let i = 0; i < post.joinRequests.length; i++) {
        if (post.joinRequests[i].joined.id == user_id)
            if (status == 'approved') {
                post.remainingSeats -= 1
                post.joinRequests[i].status = 'approved'
            }
            else {
                post.joinRequests[i].status = 'declined'
            }
    }
    const result = await post.save()
    return res.send({ "success": true, "results": result })
}

