const express = require('express')
const posts = require('../Controllers/postController')
const router = express.Router()

router.get('/',)
router.post('/new', posts.addPosts)
router.post('/join/:id',)
router.post('/quit/:id',)
router.patch('/update/:id',)
router.delete('/delete/:id',)

module.exports = router