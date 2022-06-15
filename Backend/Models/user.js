const mongoose = require('mongoose')
const Schema = mongoose.Schema
const passportLocalMongoose = require('passport-local-mongoose')

const UserSchema = new Schema({
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true
    },
    phone: {
        type: Number,
        required: [true, 'Phone is required'],
        unique: true
    },
    gender: {
        type: String,
        enum: ['Male', 'Female', 'Other'],
        required: true
    },
    carDetails: [{
        brand: {
            type: String,
        },
        model: {
            type: String,
        },
        productionYear: {
            type: Number
        }
    }],
    musicPrefrences: {
        type: [String]
    },
    dob: {
        type: Date
    },
    image: {
        type: String
    },
    userType: {
        type: String,
        required: true
    },
    adress: [{
        location: String,
        geometry: {
            type: {
                type: String,
                enum: ['Point'],

            },
            coordinates: {
                type: [Number],
            }
        }
    }],
    reviews: [{
        type: Schema.Types.ObjectId,
        ref: 'Review'
    }],
    blocked: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }]
}, { timestamps: true })

UserSchema.plugin(passportLocalMongoose)

module.exports = mongoose.model('User', UserSchema)