const mongoose = require('mongoose'),
    youtube = new mongoose.Schema({
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
        Description: [String],
        Details: [String],
        Links: [String],
        Stats: [String],
        Social: [String]
    });

exports.schema = youtube;
exports.model = mongoose.model('youtube', youtube);