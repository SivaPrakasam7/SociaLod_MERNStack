const mongoose = require('mongoose'),
    tiktok = new mongoose.Schema({
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
        Follow: [String],
        Description: [String],
        Videos: [String],
        Social: [String]
    }, { versionKey: false });

exports.schema = tiktok;
exports.model = mongoose.model('tiktok', tiktok);