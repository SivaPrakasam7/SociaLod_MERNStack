const mongoose = require('mongoose'),
    medium = new mongoose.Schema({
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
        Follow: [String],
        Social: [String]
    }, { versionKey: false });

exports.schema = medium;
exports.model = mongoose.model('medium', medium);