const Review = require('../Models/review')

module.exports.getReviews = async () => {
    const reviews = await Review.find({ "reviewed": req.params.id }).populate('author')
    res.send({ "success": true, "results": reviews.filter((i) => { reviews.author.status == 'active' }) })
}

module.exports.addReview = async () => {
    const { rating, body } = req.body
    const review = new Review({ body, rating, "reviewed": req.params.id, "author": req.user })
    res.send({ "success": true, "results": reviews.filter((i) => { reviews.author.status == 'active' }) })
}
