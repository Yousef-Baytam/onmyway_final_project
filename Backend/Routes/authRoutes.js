const express = require('express')
const passport = require('passport')
const router = express.Router()
const auth = require('../Controllers/auth')

router.post('/register', auth.register)
router.post('/login', passport.authenticate('local'), auth.login)

module.exports = router