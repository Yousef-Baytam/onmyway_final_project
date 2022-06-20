const express = require('express')
const userController = require('../Controllers/userController')
const router = express.Router()
const catchAsync = require('../Utils/catchAsync')

router.get('/:id', catchAsync(userController.getUser))
router.post('/block',)
router.post('/report',)
router.patch('/', catchAsync(userController.updateUser))
// chat?

module.exports = router