const mongoose = require('mongoose'),
    twitter = new mongoose.Schema({
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
        Name: [[{
            type: String,
            required: true,
            trim: true
        }]],
        Profile: {
            type: String,
            required: true
        },
        Intro: [String],
        Tweets: [{
            _id: false,
            Img: {
                type: String,
                trim: true
            },
            Link: {
                type: String,
                trim: true
            },
            Content: [String]
        }],
        Social: [String]
    });

exports.schema = twitter;
exports.model = mongoose.model('twitter', twitter);