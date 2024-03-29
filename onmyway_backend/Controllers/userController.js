const User = require("../Models/user")
const Report = require('../Models/reports')
const { uploadImage, deleteImage } = require("../Utils/cloudinary")
const Review = require('../Models/review')
const { findById } = require("../Models/user")

module.exports.getUser = async (req, res, next) => {
    const ids = req.body
    const users = await User.find({
        '_id': { $in: [...ids] }
    })
    return res.send({ "success": true, "results": users })
}

module.exports.updateUser = async (req, res, next) => {
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
    const reviews = await Review.find({ 'reviewed': user.id }).populate('author')
    const newUser = { ...update._doc, reviews }
    return res.send({ "success": true, "results": newUser })
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
    const reviews = await Review.find({ 'reviewed': user.id }).populate('author')
    const newUser = { ...update._doc, reviews }
    await deleteImage(toBeDeleted)
    return res.send({ "success": true, "results": newUser })
}

module.exports.blockUser = async (req, res, next) => {
    const user = req.user
    const update = await User.findByIdAndUpdate(user.id, { $push: { blocked: req.params.id } }, { new: true })
    return res.send({ "success": true, "results": update })
}

module.exports.unblockUser = async (req, res, next) => {
    const user = req.user
    const { id } = req.params
    const update = await User.findByIdAndUpdate(user._id, {
        $pull: {
            blocked: id,
        },
    }, { new: true })
    return res.send({ "success": true, "results": update })
}

module.exports.reportUser = async (req, res, next) => {
    const rep = new Report({ 'sender': req.user.id, 'reported': req.params.id, 'reportType': req.body.reportType, 'report': req.body.report })
    await rep.save()
    return res.send({ "success": true, "results": rep })
}

module.exports.storeToken = async (req, res, next) => {
    const { token, id } = req.params
    let user = await User.findByIdAndUpdate(id, {
        notification: {
            status: 'active',
            token: token
        }
    }, { new: true })
    return res.send({ "success": true, "results": user })
}

module.exports.updateStatus = async (req, res, next) => {
    const user = req.user
    let result = await User.findByIdAndUpdate(user._id, {
        notification: {
            status: 'inactive',
        }
    }, { new: true })
    return res.send({ "success": true, "results": user })
}