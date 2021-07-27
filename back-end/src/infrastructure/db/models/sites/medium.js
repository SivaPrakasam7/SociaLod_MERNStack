const mongoose = require('mongoose'),
    medium = new mongoose.Schema({
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
        About: [String],
        Follow: [String],
        Social: [String]
    }, { versionKey: false });

exports.schema = medium;
exports.model = mongoose.model('medium', medium);