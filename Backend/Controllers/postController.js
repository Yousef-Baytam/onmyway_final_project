const moment = require('moment')
const Post = require('../Models/posts')

module.exports.getPosts = async (req, res) => {
    const user = req.user
    const posts = await Post.find({ "prefferedGender": user.gender, "prefferedGender": "any" }).populate("User")
    // ???
    res.send(posts)
}

module.exports.addPosts = async (req, res) => {
    return res.send(moment().format('dddd'))
    const posts = new Post({
        "from": req.body.from,
        "to": req.body.to,
        "prefferedGender": user.gender,
        "days": req.body.days, "prefferedGender": "any"
    })
    res.send(posts)
}

