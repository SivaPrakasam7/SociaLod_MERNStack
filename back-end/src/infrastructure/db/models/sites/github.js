const mongoose = require('mongoose'),
    github = new mongoose.Schema({
        Link: {
            type: String,
            trim: true
        },
        Username: {
            type: String,
            trim: true
        },
        Name: [{
            type: String,
            trim: true
        }],
        Profile: {
            type: String,
            trim: true
        },
        About: [String],
        Achivements: [{
            _id: false,
            Img: {
                type: String
            },
            AltText: {
                type: String
            }
        }],
        Organization: [{
            _id: false,
            Link: {
                type: String
            },
            Payload: {
                type: String
            }
        }],
        Projects: [{
            _id: false,
            Link: {
                type: String
            },
            Content: [String]
        }],
        Activity: [[String]],
        Social: [String]
    }, { versionKey: false });

exports.schema = github;
exports.model = mongoose.model('github', github);