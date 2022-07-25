const express = require('express')
const userController = require('../Controllers/userController')
const router = express.Router()
const catchAsync = require('../Utils/catchAsync')

router.post('/', catchAsync(userController.getUser))
router.post('/report/:id', catchAsync(userController.reportUser))
router.patch('/:id/:token', catchAsync(userController.storeToken))
router.patch('/block/:id', catchAsync(userController.blockUser))
router.patch('/unblock/:id', catchAsync(userController.unblockUser))
router.patch('/', catchAsync(userController.updateUser))
router.patch('/image', catchAsync(userController.updateImage))

module.exports = router