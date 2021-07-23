const mongoose = require('mongoose'),
    facebook = new mongoose.Schema({
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
        Name: {
            type: String,
            required: true,
            trim: true
        },
        Profile: {
            type: String,
            required: true
        },
        Overview: [String],
        Work_and_education: [String],
        places: [String],
        Contact_and_basic_info: [String],
        Family_and_relationships: [String],
        Life_events: [String],
        Friends: [{
            _id: false,
            Img: {
                type: String,
                trim: true
            },
            Link: {
                type: String,
                trim: true
            },
            Content: [String]
        }],
        Photos: [{
            _id: false,
            Img: {
                type: String,
                trim: true
            },
            AltText: {
                type: String,
                trim: true
            },
            Link: {
                type: String,
                trim: true
            }
        }],
        Videos: [{
            _id: false,
            img: {
                type: String,
                trim: true
            },
            AltText: {
                type: String,
                trim: true
            },
            Link: {
                type: String,
                trim: true
            }
        }],
        CheckIns: [{
            _id: false,
            Img: {
                type: String,
                trim: true
            },
            AltText: {
                type: String,
                trim: true
            },
            Link: {
                type: String,
                trim: true
            },
            Content: [String]
        }],
        Movies: [{
            _id: false,
            Img: {
                type: String,
                trim: true
            },
            AltText: {
                type: String,
                trim: true
            },
            Link: {
                type: String,
                trim: true
            },
            Content: [String]
        }],
        Likes: [{
            _id: false,
            Img: {
                type: String,
                trim: true
            },
            AltText: {
                type: String,
                trim: true
            },
            Link: {
                type: String,
                trim: true
            },
            Content: [String]
        }],
        Social: [String]
    });

exports.schema = facebook;
exports.model = mongoose.model('facebook', facebook);