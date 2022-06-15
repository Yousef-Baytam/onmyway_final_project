module.exports.loggedIn = (req, res, next) => {
    if (!req.isAuthenticated())
        res.send({ 'response': 'Unauthorised' })
    next()
}