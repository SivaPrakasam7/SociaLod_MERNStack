const mongoose = require('mongoose'),
    pinterest = new mongoose.Schema({
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
        Images: [{
            _id: false,
            Link: {
                type: String,
                trim: true
            },
            Content: [String]
        }],
        Social: [String]
    }, { versionKey: false });

exports.schema = pinterest;
exports.model = mongoose.model('pinterest', pinterest);