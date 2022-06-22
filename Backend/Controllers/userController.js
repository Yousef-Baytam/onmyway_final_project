const User = require("../Models/user")
const Report = require('../Models/reports')
const Post = require('../Models/posts')


module.exports.getUser = async (req, res, next) => {
    const { id } = req.params
    const user = await User.findById(id)
    return res.send({ "success": true, "results": user })
}

module.exports.getJoinRequests = async (req, res, next) => {
    const post = await Post.findById(req.params.id).populate('joinRequests.joined')
    return res.send({ "success": true, "results": post })
}

module.exports.updateUser = async (req, res, next) => {
    const user = req.user
    const update = await User.findByIdAndUpdate(user.id, { 'email': req.body.email, 'phone': req.body.phone, 'gender': req.body.gender }, { new: true, runValidators: true })
    return res.send({ "success": true, "results": update })
}

module.exports.blockUser = async (req, res, next) => {
    const user = req.user
    const update = await User.findByIdAndUpdate(user.id, { $push: { blocked: req.params.id } }, { new: true })
    return res.send({ "success": true, "results": update })
}

module.exports.reportUser = async (req, res, next) => {
    const rep = new Report({ 'sender': req.user.id, 'reported': req.params.id, 'reportType': req.body.reportType, 'report': req.body.report })
    await rep.save()
    return res.send({ "success": true, "results": rep })
}