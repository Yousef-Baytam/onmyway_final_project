const Review = require('../Models/review')

module.exports.getReviews = async (req, res) => {
    const reviews = await Review.find({ "reviewed": req.params.id }).populate('author')
    res.send({ "success": true, "results": reviews.filter((i) => { reviews.author.status == 'active' }) })
}

module.exports.addReview = async (req, res) => {
    const { rating, body } = req.body
    const review = new Review({ body, rating, "reviewed": req.params.id, "author": req.user })
    const result = await review.save()
    res.send({ "success": true, "results": result })
}

module.exports.updateReview = async (req, res) => {
    const { rating, body } = req.body
    const review = Review.findByIdAndUpdate(req.params.id, { body, rating }, { runValidators: true, new: true })
    res.send({ "success": true, "results": review })
}
