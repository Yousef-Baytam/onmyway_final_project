const mongoose = require('mongoose')
const Schema = mongoose.Schema
const passportLocalMongoose = require('passport-local-mongoose')
const { phone } = require('phone')

const UserSchema = new Schema({
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true
    },
    phone: {
        type: String,
        required: [true, 'Phone is required'],
        unique: true,
        validate: {
            validator: function (e) {
                return phone(e).isValid
            },
            message: props => `${ props.value } is not a valid phone number!`
        }
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
    if (this._update.phone)
        this.phone = phone(this.phone).phoneNumber
    next()
})

UserSchema.pre('findOneAndUpdate', function (next) {
    if (this._update.phone)
        this._update.phone = phone(this._update.phone).phoneNumber
    next()
})

module.exports = mongoose.model('User', UserSchema)