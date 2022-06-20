const User = require("../Models/user")


module.exports.getUser = async (req, res, next) => {
    const { id } = req.params
    const user = await User.findById(id)
    res.send(user)
}

module.exports.updateUser = async (req, res, next) => {
    // res.send(req.body)
    const user = req.user
    const update = await User.findByIdAndUpdate(user.id, { 'email': req.body.email, 'phone': req.body.phone, 'gender': req.body.gender }, { new: true })
    res.send(update)
}