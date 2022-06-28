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