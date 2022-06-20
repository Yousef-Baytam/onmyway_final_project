const express = require('express')
const userController = require('../Controllers/userController')
const router = express.Router()

router.get('/:id', userController.getUser)
router.post('/block',)
router.post('/report',)
router.patch('/', userController.updateUser)
// chat?

module.exports = router