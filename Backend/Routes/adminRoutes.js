const express = require('express')
const router = express.Router()
const adminController = require('../Controllers/adminController')

router.get('/users', catchAsync(adminController.getUsers))
router.get('/reports', catchAsync(adminController.getReports))
router.post('/ban/:id', catchAsync(adminController.banUser))

module.exports = router