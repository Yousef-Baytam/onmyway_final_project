const mongoose = require('mongoose')
const Schema = mongoose.Schema
const passportLocalMongoose = require('passport-local-mongoose')
const { phone } = require('phone')
const catchAsync = require('../Utils/catchAsync')
const ExpressError = require('../Utils/ExpressError')

const UserSchema = new Schema({
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true
    },
    phone: {
        type: String,
        required: [true, 'Phone is required'],
        unique: true
    },
    gender: {
        type: String,
        enum: ['male', 'female', 'other'],
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
        default: 'user'
    },
    adress: [{
        location: String,
        geometry: {
            type: {
                type: String,
                enum: ['point'],

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
    }],
    status: {
        type: String,
        enum: ['active', 'banned'],
        default: 'active'
    }
}, { timestamps: true })

UserSchema.plugin(passportLocalMongoose)

UserSchema.pre('save', function (next) {
    const result = phone(this.phone)
    if (!result.isValid)
        next(new ExpressError('Invalid phone number', 500))
    this.phone = result.phoneNumber
    next()
})

module.exports = mongoose.model('User', UserSchema)