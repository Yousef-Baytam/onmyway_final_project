const User = require("../Models/user")
const Report = require('../Models/reports')
const { uploadImage, deleteImage } = require("../Utils/cloudinary")
const Review = require('../Models/review')

module.exports.getUser = async (req, res, next) => {
    const { id } = req.params
    const user = await User.findById(id)
    return res.send({ "success": true, "results": user })
}

module.exports.updateUser = async (req, res, next) => {
    console.log('hello')
    const user = req.user
    const update = await User.findByIdAndUpdate(user.id, {
        'username': req.body.username,
        'email': req.body.email,
        'phone': req.body.phone,
        'gender': req.body.gender,
        'carDetails': req.body.carDetails,
        'musicPrefrences': req.body.musicPrefrences,
        'dob': req.body.dob,
        'adress': req.body.adress,
    }, { new: true, runValidators: true })
    console.log(update)
    return res.send({ "success": true, "results": update })
}

module.exports.updateImage = async (req, res, next) => {
    const user = req.user
    const toBeDeleted = user.image.public_id
    const resUrl = await uploadImage(req.body.base64)
    const update = await User.findByIdAndUpdate(user.id, {
        'image': {
            url: resUrl.url,
            public_id: resUrl.public_id,
        }
    }, { new: true })
    const reviews = await Review.find({ 'reviewed': user.id })
    const newUser = { ...update._doc, reviews }
    await deleteImage(toBeDeleted)
    return res.send({ "success": true, "results": newUser })
}

module.exports.blockUser = async (req, res, next) => {
    const user = req.user
    const update = await User.findByIdAndUpdate(user.id, { $push: { blocked: req.params.id } }, { new: true })
    return res.send({ "success": true, "results": update })
}

module.exports.reportUser = async (req, res, next) => {
    const rep = new Report({ 'sender': req.user.id, 'reported': req.params.id, 'reportType': req.body.reportType, 'report': req.body.report })
    await rep.save()
    return res.send({ "success": true, "results": rep })
}