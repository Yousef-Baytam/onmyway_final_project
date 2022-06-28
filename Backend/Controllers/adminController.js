const User = require('../Models/user')

module.exports.getUsers = async (req, res, next) => {
    const activeUser = await User.find({ "status": "active" })
    const bennedUser = await User.find({ "status": "banned" })
    return res.send({ "success": true, "Active User": activeUser, "Benned User": bennedUser })
}