const mongoose = require('mongoose'),
    instagram = new mongoose.Schema({
        Link: {
            type: String,
            trim: true
        },
        Username: {
            type: String,
            trim: true
        },
        Name: {
            type: String,
            trim: true
        },
        Profile: {
            type: String
        },
        Follow_posts: [String],
        About: [String],
        Images: [{
            _id: false,
            Img: {
                type: String,
                trim: true
            },
            AltText: {
                type: String,
                trim: true
            },
            Link: {
                type: String,
                trim: true
            }
        }],
        Social: [String]
    }, { versionKey: false });

exports.schema = instagram;
exports.model = mongoose.model('instagram', instagram);