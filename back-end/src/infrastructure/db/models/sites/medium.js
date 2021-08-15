const mongoose = require('mongoose'),
    medium = new mongoose.Schema({
        Link: {
            type: String,
            trim: true
        },
        Query: {
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
        About: [String],
        Follow: [String],
        Social: [String]
    }, { versionKey: false });

exports.schema = medium;
exports.model = mongoose.model('medium', medium);