const express = require('express')
const postsController = require('../Controllers/postController')
const catchAsync = require('../Utils/catchAsync')
const router = express.Router()

router.get('/', catchAsync(postsController.getPosts))
router.get('/user', catchAsync(postsController.getUserPosts))
router.get('/user/joinedPosts', catchAsync(postsController.getUserPosts))
router.get('/join_requests/:id', catchAsync(postsController.getJoinRequests))
router.post('/new', catchAsync(postsController.addPosts))
router.post('/join/:id', catchAsync(postsController.joinPosts))
router.post('/quit/:id', catchAsync(postsController.quitPosts))
router.post('/update_request/:post_id/:user_id/:status', catchAsync(postsController.approveDeclinePosts))
router.patch('/update/:id', catchAsync(postsController.updatePosts))
router.delete('/delete/:id', catchAsync(postsController.deletePosts))

module.exports = router