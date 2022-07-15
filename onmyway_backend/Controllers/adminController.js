const User = require('../Models/user')
const Report = require('../Models/reports')

module.exports.getUsers = async (req, res, next) => {
    const activeUser = await User.find({ "status": "active" })
    const bennedUser = await User.find({ "status": "banned" })
    return res.send({ "success": true, "Active User": activeUser, "Benned User": bennedUser })
}

module.exports.getReports = async (req, res, next) => {
    const pendingReports = await Report.find({ "status": "pending" })
    const reviewedReports = await Report.find({ "status": "reviewed" })
    return res.send({ "success": true, "Pending Reports": pendingReports, "Reviewed Reports": reviewedReports })
}

module.exports.banUser = async (req, res, next) => {
    const user = await User.findByIdAndUpdate(req.params.id, { "status": "banned" }, { runValidators: true, new: true })
    return res.send({ "success": true, "results": user })
}

module.exports.unbanUser = async (req, res, next) => {
    const user = await User.findByIdAndUpdate(req.params.id, { "status": "active" }, { runValidators: true, new: true })
    return res.send({ "success": true, "results": user })
}