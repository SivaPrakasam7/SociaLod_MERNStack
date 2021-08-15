const mongoose = require('mongoose'),
    walker = require('../../../../application/services/util_services/utils').walker,
    UserSchema = {
        Profile: {
            type: String,
            required: true
        },
        Name: {
            type: String,
            required: true
        },
        Email: {
            type: String,
            required: true,
            unique: true
        },
        MobileNo: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        About: {
            type: String,
            default: 'Nothing to show'
        },
        Views: [Object],
    };

for (var v of walker('../../../../src/infrastructure/db/models/sites', 'js')) {
    UserSchema[v.categeory] = require(v.path).schema;
}

const User = new mongoose.Schema(UserSchema, { versionKey: false });

module.exports = mongoose.model('users', User);