const mongoose = require('mongoose'),
    walker = require('../../../../application/services/util_services/utils').walker;
var reg = "";

for (var v of walker('../../../entities', 'js')) { reg = reg + `^${v.categeory}$|` }

Body = new mongoose.Schema({
    userid: {
        type: String,
        trim: true,
        validate: {
            validator: function (v) {
                return /[a-z0-9]+/g.test(v);
            },
            message: '{VALUE} is not valid name'
        }
    },
    name: {
        type: String,
        trim: true,
        validate: {
            validator: function (v) {
                return /[a-zA-Z0-9-_]+/g.test(v);
            },
            message: '{VALUE} is not valid name'
        }
    },
    email: {
        type: String,
        trim: true,
        validate: {
            validator: function (v) {
                return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g.test(v);
            },
            message: '{VALUE} is not valid email'
        }
    },
    password: {
        type: String,
        trim: true,
        validate: {
            validator: function (v) {
                return /[a-zA-Z0-9`~!@#$%^&*()_+-={}|\[\]\\:";'<>?,./]+/g.test(v);
            },
            message: '{VALUE} is not valid password'
        }
    },
    mobileno: {
        type: String,
        trim: true,
        validate: {
            validator: function (v) {
                return /([+]\d{2}( |)|)\d{10}/g.test(v);
            },
            message: 'password must be greater than 8'
        }
    },
    about: {
        type: String,
        trim: true,
        validate: {
            validator: function (v) {
                return /.*/g.test(v);
            },
            message: '{VALUE} is not valid about'
        }
    },
    username: {
        type: String,
        trim: true,
        validate: {
            validator: function (v) {
                return /[a-zA-Z0-9-_]+/g.test(v);
            },
            message: '{VALUE} is not valid username'
        }
    },
    site: {
        type: String,
        trim: true,
        validate: {
            validator: function (v) {
                return eval(`/(${reg.slice(0, -1)})+/g`).test(v);
            },
            message: '{VALUE} is not valid site name'
        }
    }
});

module.exports = mongoose.model('', Body);