const mongoose = require('mongoose'),
    walker = require('../../../../application/services/util_services/utils').walker,
    UserSchema = {
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
        Networks: {
        },
        About: {
            type: String,
            default: 'Nothing to show'
        }
    };

for (var v of walker('../../../../src/infrastructure/db/models/sites', 'js')) {
    UserSchema.Networks[v.categeory] = require(v.path).schema;
}

const User = new mongoose.Schema(UserSchema, { versionKey: false });

module.exports = mongoose.model('users', User);