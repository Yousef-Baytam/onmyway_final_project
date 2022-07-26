const process = require('dotenv').config()
const jwt = require('jsonwebtoken');
jwt_key = process.parsed.JWT_TOKEN_SECRET

const issueJWT = (user) => {
    const expIn = '365d'

    const payload = {
        id: user.id,
        username: user.username,
        email: user.email,
        iat: Date.now()
    }

    const signedToken = jwt.sign(payload, jwt_key, { expiresIn: expIn })

    return {
        token: signedToken,
        expires: expIn
    }
}

module.exports = issueJWT