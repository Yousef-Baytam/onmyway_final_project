const Post = require('../Models/posts')

module.exports.getPosts = async (req, res) => {
    const user = req.user
    const posts = await Post.find({ "prefferedGender": user.gender, "prefferedGender": "any" }).populate("User")
    // ???
    res.send(posts)
}