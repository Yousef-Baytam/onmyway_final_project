const Review = require('../Models/review')

module.exports.getReviews = async () => {
    const reviews = await Review.find({ "reviewed": req.params.id }).populate('author')
    res.send({ "success": true, "results": reviews.filter((i) => { reviews.author.status == 'active' }) })
}