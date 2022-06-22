const moment = require('moment')
const Post = require('../Models/posts')

module.exports.getPosts = async (req, res) => {
    const user = req.user
    const posts = await Post.find({
        $or: [
            { "prefferedGender": user.gender },
            { "prefferedGender": "any" }
        ], $and: [{

            $or: [
                { 'repeat': true },
                { 'createdAt': { $gte: moment().subtract(7, 'days').format() } }
            ]
        }]
    }).populate('owner')

    res.send(posts)
}

module.exports.addPosts = async (req, res) => {
    // return res.send(moment('2022-06-12 15:00').format('hh:mm'))
    const posts = new Post({
        "from": req.body.from,
        "to": req.body.to,
        "days": req.body.days,
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


// .$where(function () {
//     return this.repeat == true || moment().subtract(6, days).format() - this.createdAt > 0
// })
//