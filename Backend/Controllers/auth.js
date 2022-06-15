const User = require('../Models/user')

module.exports.register = async (req, res) => {
    const user = new User(req.body)
    const result = await User.register(user, req.body.password)
    res.send(result)
}