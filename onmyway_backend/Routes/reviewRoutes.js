const express = require('express')
const router = express.Router()
const reviewController = require('../Controllers/reviewController')
const catchAsync = require('../Utils/catchAsync')

router.get('/user/:id', catchAsync(reviewController.getReviews))
router.post('/new/:id', catchAsync(reviewController.addReview))
router.patch('/update/:id', catchAsync(reviewController.updateReview))
router.delete('/delete/:id', catchAsync(reviewController.deleteReview))

module.exports = router