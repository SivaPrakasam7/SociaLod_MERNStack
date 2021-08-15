const mongoose = require('mongoose'),
    pinterest = new mongoose.Schema({
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