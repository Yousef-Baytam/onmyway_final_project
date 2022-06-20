const User = require("../Models/user")


module.exports.getUser = async (req, res, next) => {
    const { id } = req.params
    const user = await User.findById(id)
    res.send(user)
}