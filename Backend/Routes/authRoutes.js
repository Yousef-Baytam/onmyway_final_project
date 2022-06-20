const express = require('express')
const passport = require('passport')
const router = express.Router()
const auth = require('../Controllers/authController')

router.get('/me', auth.me)
router.post('/register', auth.register)
router.post('/login', passport.authenticate('local'), auth.login)
router.post('/logout', auth.logout)

module.exports = router