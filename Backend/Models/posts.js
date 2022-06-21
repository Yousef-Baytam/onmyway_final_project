const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    from: {
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
    },
    to: {
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
    },
    days: {
        type: [String],
        enum: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'],
        required: true
    },
    repeat: {
        type: Boolean,
        default: false
    },
    departureTime: {
        type: String,
        required: true
    },
    returnTime: {
        type: String
    },
    remainingSeats: {
        type: Number,
        required: true,
        enum: [0, 1, 2, 3]
    },
    prefferedGender: {
        type: String,
        enum: ['male', 'female', 'any'],
        default: 'any'
    },
    shareExpenses: {
        type: Boolean,
        default: false
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    joinRequests: [{
        status: {
            type: String,
            enum: ['pending', 'approved', 'declined'],
            default: 'pending'
        },
        joined: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        },
    }],
    comment: {
        type: String,
    }
}, { timestamps: true });

module.exports = mongoose.model("Post", postSchema);