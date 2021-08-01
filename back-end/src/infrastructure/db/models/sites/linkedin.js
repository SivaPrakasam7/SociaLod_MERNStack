const mongoose = require('mongoose'),
    linkedin = new mongoose.Schema({
        Link: {
            type: String,
            trim: true
        },
        Username: {
            type: String,
            trim: true,
            unique: true
        },
        Name: [{
            type: String,
            trim: true
        }],
        Profile: [{
            type: String
        }],
        Intro: [String],
        Activity: [{
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
        About: [String],
        Experience: [{
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
        Education: [{
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
        Certification: [{
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
        Volunteer: [{
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
        Skills: [{
            _id: false,
            Link: {
                type: String,
                trim: true
            },
            Content: [String]
        }],
        Interest: [{
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
        Contact_info: [String],
        Social: [String]
    }, { versionKey: false });

exports.schema = linkedin;
exports.model = mongoose.model('linkedin', linkedin);