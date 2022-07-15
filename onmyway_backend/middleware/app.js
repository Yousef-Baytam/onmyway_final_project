const ExpressError = require('../Utils/ExpressError')

module.exports.loggedIn = (req, res, next) => {
    if (!req.isAuthenticated())
        throw new ExpressError('Unauthorized', 401)
    next()
}