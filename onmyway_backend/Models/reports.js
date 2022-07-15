const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reportSchema = new Schema({
    sender: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    reported: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    reportType: {
        type: String,
        required: true,
    },
    report: {
        type: String,
    },
    status: {
        type: String,
        enum: ["reviewed", "pending"],
        default: "pending"
    }
}, { timestamps: true });

module.exports = mongoose.model("Report", reportSchema);