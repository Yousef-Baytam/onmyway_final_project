const User = require("../Models/user")
const Report = require('../Models/reports')


module.exports.getUser = async (req, res, next) => {
    const { id } = req.params
    const user = await User.findById(id)
    res.send(user)
}

module.exports.updateUser = async (req, res, next) => {
    const user = req.user
    const update = await User.findByIdAndUpdate(user.id, { 'email': req.body.email, 'phone': req.body.phone, 'gender': req.body.gender }, { new: true, runValidators: true })
    res.send(update)
}

module.exports.blockUser = async (req, res, next) => {
    const user = req.user
    const update = await User.findByIdAndUpdate(user.id, { $push: { blocked: req.params.id } }, { new: true })
    res.send(update)
}

module.exports.reportUser = async (req, res, next) => {
    const rep = new Report({ 'sender': req.user.id, 'reported': req.params.id, 'reportType': req.body.reportType, 'report': req.body.report })
    await rep.save()
    res.send({ "success": true, "report": rep })
}  