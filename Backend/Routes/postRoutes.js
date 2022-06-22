const express = require('express')
const posts = require('../Controllers/postController')
const catchAsync = require('../Utils/catchAsync')
const router = express.Router()

router.get('/', catchAsync(posts.getPosts))
router.post('/new', catchAsync(posts.addPosts))
router.post('/join/:id',)
router.post('/quit/:id',)
router.patch('/update/:id',)
router.delete('/delete/:id',)

module.exports = router