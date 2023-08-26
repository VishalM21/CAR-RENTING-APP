const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const carSchema = new Schema({
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    make: String,
    model: String,
    year: Number,
    type: String,
    pricePerWeek: Number,
    pricePerHour: Number,
    image: [{
        imageUrl: {
            type: String
        }
    }],
    location: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    },
    coords: {
        lat: {
            type: Number,
            default:0
        },
        lng: {
            type: Number,
            default:0
        }
    },
    picture: String,
    wallet: Number
});

module.exports = mongoose.model('Car',carSchema);