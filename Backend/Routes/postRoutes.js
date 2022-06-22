const express = require('express')
const posts = require('../Controllers/postController')
const catchAsync = require('../Utils/catchAsync')
const router = express.Router()

router.get('/', catchAsync(posts.getPosts))
router.post('/new', catchAsync(posts.addPosts))
router.post('/join/:id', catchAsync(posts.joinPosts))
router.post('/quit/:id',)
router.patch('/update/:id', catchAsync(posts.updatePosts))
router.delete('/delete/:id', catchAsync(posts.deletePosts))

module.exports = router