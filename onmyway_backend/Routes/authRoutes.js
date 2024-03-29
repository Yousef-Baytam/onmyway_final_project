const express = require('express')
const passport = require('passport')
const router = express.Router()
const auth = require('../Controllers/authController')
const catchAsync = require('../Utils/catchAsync')

router.get('/me', passport.authenticate('jwt', { session: false }), auth.me)
router.post('/register', catchAsync(auth.register))
router.post('/login', passport.authenticate('local'), catchAsync(auth.login))
// router.post('/logout', auth.logout)

module.exports = router