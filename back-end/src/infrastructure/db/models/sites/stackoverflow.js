const mongoose = require('mongoose'),
    stackoverflow = new mongoose.Schema({
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
        Description: [String],
        Details: [String],
        Communities: [{
            _id: false,
            Link: {
                type: String,
                trim: true
            },
            Content: [String]
        }],
        Badges: [[String]],
        TopPosts: [{
            _id: false,
            Link: {
                type: String,
                trim: true
            },
            Content: [String]
        }],
        Social: [String]
    }, { versionKey: false });

exports.schema = stackoverflow;
exports.model = mongoose.model('stackoverflow', stackoverflow);