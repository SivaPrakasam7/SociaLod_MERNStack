const mongoose = require('mongoose'),
    instagram = new mongoose.Schema({
        Link: {
            type: String,
            required: true,
            trim: true
        },
        Username: {
            type: String,
            required: true,
            trim: true
        },
        Name: {
            type: String,
            required: true,
            trim: true
        },
        Profile: {
            type: String,
            required: true
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
    });

exports.schema = instagram;
exports.model = mongoose.model('instagram', instagram);