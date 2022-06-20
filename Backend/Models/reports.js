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
    report: {
        type: String,
    }
}, { timestamps: true });

module.exports = mongoose.model("Report", reportSchema);