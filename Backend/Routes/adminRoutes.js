const express = require('express')
const router = express.Router()
const adminController = require('../Controllers/adminController')
const catchAsync = require('../Utils/catchAsync')

router.get('/users', catchAsync(adminController.getUsers))
router.get('/reports', catchAsync(adminController.getReports))
router.post('/ban/:id', catchAsync(adminController.banUser))
router.post('/unban/:id', catchAsync(adminController.unbanUser))

module.exports = router