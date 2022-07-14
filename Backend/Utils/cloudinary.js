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
        width: 250,
        height: 250,
        gravity: "faces",
        crop: "fill"
    };

    try {
        const result = await cloudinary.uploader.upload(imagePath, options);
        console.log(result);
        return result.public_id;
    } catch (error) {
        console.error(error);
    }
};