const mongoose = require('mongoose'),
    twitter = new mongoose.Schema({
        Link: {
            type: String,
            trim: true
        },
        Username: {
            type: String,
            trim: true
        },
        Name: [[{
            type: String,
            trim: true
        }]],
        Profile: {
            type: String
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
    }, { versionKey: false });

exports.schema = twitter;
exports.model = mongoose.model('twitter', twitter);