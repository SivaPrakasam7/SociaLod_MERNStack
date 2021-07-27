const mongoose = require('mongoose'),
    stackoverflow = new mongoose.Schema({
        Link: {
            type: String,
            required: true,
            trim: true
        },
        Username: {
            type: String,
            required: true,
            trim: true,
            unique: true
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