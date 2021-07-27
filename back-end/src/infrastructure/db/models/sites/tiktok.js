const mongoose = require('mongoose'),
    tiktok = new mongoose.Schema({
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
        Follow: [String],
        Description: [String],
        Videos: [String],
        Social: [String]
    }, { versionKey: false });

exports.schema = tiktok;
exports.model = mongoose.model('tiktok', tiktok);