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
    res.send(posts.filter((i) => i.owner.status == 'active'))
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
        "remainingSeats": req.body.remainingSeats,
        "prefferedGender": req.body.prefferedGender,
        "shareExpenses": req.body.shareExpenses,
        "owner": req.user,
        "comment": req.body.comment
    })
    const result = await posts.save()
    res.send(result)
}