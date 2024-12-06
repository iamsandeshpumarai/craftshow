const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    comment: String,
    commented: {
        type: Date,
        default: Date.now
    },author:{
        type:Schema.Types.ObjectId,
        ref:"User"
    }
});

// Use a capitalized model name
module.exports = mongoose.model('Review', reviewSchema);
