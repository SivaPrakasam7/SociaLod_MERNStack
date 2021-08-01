const mongoose = require('mongoose'),
    youtube = new mongoose.Schema({
        Link: {
            type: String,
            trim: true
        },
        Username: {
            type: String,
            trim: true,
            unique: true
        },
        Name: [[{
            type: String,
            trim: true
        }]],
        Profile: {
            type: String
        },
        Description: [String],
        Details: [String],
        Links: [String],
        Stats: [String],
        Social: [String]
    }, { versionKey: false });

exports.schema = youtube;
exports.model = mongoose.model('youtube', youtube);