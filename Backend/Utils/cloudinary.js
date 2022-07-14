const process = require('dotenv').config()
const cloudinary = require('cloudinary').v2

CLOUDINARY_CLOUD_NAME = process.parsed.CName
CLOUDINARY_KEY = process.parsed.CKey
CLOUDINARY_SECRET = process.parsed.CSecret

cloudinary.config({
    cloud_name: CLOUDINARY_CLOUD_NAME,
    api_key: CLOUDINARY_KEY,
    api_secret: CLOUDINARY_SECRET
})

module.exports.uploadImage = async (imagePath) => {

    const options = {
        use_filename: true,
        unique_filename: false,
        overwrite: true,
    };

    const base64 = `data:image/png;base64,${ imagePath }`

    try {
        const result = await cloudinary.uploader.upload(base64, options)
        return result
    } catch (error) {
        console.error(error)
    }
};