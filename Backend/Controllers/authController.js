const User = require('../Models/user')

module.exports.register = async (req, res) => {
    const user = new User(req.body)
    const result = await User.register(user, req.body.password)
    res.send(result)
}

module.exports.login = (req, res) => {
    res.send({ 'response': 'success' })
}

module.exports.logout = (req, res, next) => {
    req.logout((err) => { return next(err) })
    res.send({ 'response': 'success' })
}

module.exports.me = (req, res) => {
    res.send({ 'user': req.user })
}