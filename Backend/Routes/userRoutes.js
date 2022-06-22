const express = require('express')
const userController = require('../Controllers/userController')
const router = express.Router()
const catchAsync = require('../Utils/catchAsync')

router.get('/:id', catchAsync(userController.getUser))
router.get('/join_requests/:id', catchAsync())
router.post('/block/:id', catchAsync(userController.blockUser))
router.post('/report/:id', catchAsync(userController.reportUser))
router.post('/:post_id/approve/:user_id', catchAsync())
router.post('/:post_id/decline/:user_id', catchAsync())
router.patch('/', catchAsync(userController.updateUser))
// chat?

module.exports = router