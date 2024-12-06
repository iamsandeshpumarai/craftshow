const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const listingSchema = new Schema({
    title: String,
    artist: String,
    description: String,
    image: {
        type: String,
        default: "https://media.istockphoto.com/id/1818640476/photo/diwali-rangoli.jpg?s=1024x1024&w=is&k=20&c=NcVDRp8TdvOevSuiT-ZnsCdkvpi4fplehhayYGiBIRs="
    },
    category: {
        type: String,
        default: 'Art'
    },
    likes: {
        type: Number,
        default: 0
    },
    review: [{
        type: Schema.Types.ObjectId,
        ref: "Review",
    }],
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User",
    }
});

const List = mongoose.model('CraftShow', listingSchema);
module.exports = List;
