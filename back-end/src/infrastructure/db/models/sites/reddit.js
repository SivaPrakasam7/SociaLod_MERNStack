const mongoose = require('mongoose'),
    reddit = new mongoose.Schema({
        Link: {
            type: String,
            trim: true
        },
        Username: {
            type: String,
            trim: true,
            unique: true
        },
        Name: {
            type: String,
            trim: true
        },
        Profile: {
            type: String
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
    }, { versionKey: false });

exports.schema = reddit;
exports.model = mongoose.model('reddit', reddit);