const express = require('express')
const userController = require('../Controllers/userController')
const router = express.Router()
const catchAsync = require('../Utils/catchAsync')

router.post('/', catchAsync(userController.getUser))
router.post('/block/:id', catchAsync(userController.blockUser))
router.post('/report/:id', catchAsync(userController.reportUser))
router.patch('/', catchAsync(userController.updateUser))
router.patch('/image', catchAsync(userController.updateImage))

module.exports = router