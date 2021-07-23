const mongoose = require('mongoose'),
    reddit = new mongoose.Schema({
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
        About: [String],
        Posts: [[String]],
        Trophy: [{
            _id: false,
            Img: {
                type: String,
                trim: true
            },
            Content: [String]
        }],
        Social: [String]
    });

exports.schema = reddit;
exports.model = mongoose.model('reddit', reddit);