const bcrypt = require('bcrypt'),
    User = require('../../../infrastructure/db/models/user/user'),
    tokener = require('../../../domain/Tokener'),
    mailer = require('../util_services/mailer');

// Login
exports.login = async (data) => {
    const { email, password } = data;
    const info = await User.findOne({ Email: email }, 'password');
    return await bcrypt.compare(password, info.password)
        .then(async (ok) => { return await tokener.generate({ id: info._id }, process.env.SECRET_KEY) })
        .catch(err => { return { err: true, message: err } });
};

// Registration
exports.register = async (data) => {
    const { name, email, mobileno, password, about } = data;
    return await User.create({ Name: name, Email: email, MobileNo: mobileno, password: await bcrypt.hash(password, await bcrypt.genSalt(10)), About: about })
        .then(async (info) => { return await tokener.generate({ id: info._id }, process.env.SECRET_KEY) })
        .catch((err) => { return { err: true, message: err } });
};

// Logout
exports.logout = async (data, verify) => {
    return await tokener.destroy(data.headers.authorization.split(' ')[1], verify);
};

// Forget password
exports.forget = async (email) => {
    const mail = {},
        data = await User.findOne({ Email: email }, 'Email');
    if (data) {
        reset = Buffer.from((await tokener.generate({ id: data._id, email: data.Email }, process.env.SECRET_KEY)).message.token).toString('base64');
        mail.subject = "Password reset";
        mail.template = `Create new password from the below link <a href="${process.env.URL}/api/auth/reset/${reset}">Reset</a>`;
        mail.email = data.Email;
        return await mailer(mail);
    } else {
        return { err: false, message: "Mail not registered" }
    }
};

// Reset password
exports.reset = async (payload, password) => {
    return await User.findOneAndUpdate({ _id: payload.id, Email: payload.Email }, { $set: { password: await bcrypt.hash(password, await bcrypt.genSalt(10)) } })
        .then(() => { return { err: false, message: "Password reset successful" } })
        .catch((err) => { return { err: true, message: err } });
};