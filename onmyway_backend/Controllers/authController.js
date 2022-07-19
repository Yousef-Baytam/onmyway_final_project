const Review = require('../Models/review')
const User = require('../Models/user')
const jwt = require('../Utils/jwtGen')

module.exports.register = async (req, res) => {
    const user = new User(req.body)
    const result = await User.register(user, req.body.password)
    const userInfo = { ...result._doc, image: {} }
    const token = jwt(user)
    res.send({ "results": userInfo, "token": token })
}

module.exports.login = async (req, res) => {
    const token = jwt(req.user)
    const reviews = await Review.find({ 'reviewed': req.user.id }).populate('author')
    req.user = { ...req.user._doc, reviews }
    res.send({ 'response': 'success', "user": req.user, "token": token })
}

module.exports.me = async (req, res) => {
    const reviews = await Review.find({ 'reviewed': req.user.id }).populate('author')
    req.user = { ...req.user._doc, reviews }
    res.send({ 'user': req.user })
}

// module.exports.logout = (req, res, next) => {
//     req.logout((err) => { return next(err) })
//     res.send({ 'response': 'success' })
// }