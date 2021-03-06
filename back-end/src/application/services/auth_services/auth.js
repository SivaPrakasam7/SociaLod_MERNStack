const bcrypt = require('bcrypt'),
    User = require('../../../infrastructure/db/models/user/user'),
    tokener = require('../../../domain/Tokener'),
    mailer = require('../util_services/mailer');


// Mail verification
exports.secret = async (data) => {
    const mail = {};
    code = (await tokener.generate({ email: data.email }, process.env.SECRET_KEY)).message.token;
    mail.subject = "SociaLod Mail verification";
    mail.template = `Your mailing secret code is ${code}`;
    mail.email = data.email;
    return await mailer(mail);
};

exports.mailVerify = async (data) => {
    const mail = {},
        info = await User.findOne({ Email: data.email }, 'Email');
    if (!info) {
        code = (await tokener.generate({ email: data.email }, process.env.SECRET_KEY)).message.token;
        mail.subject = "SociaLod registration Link";
        mail.template = `Click and register here <a href="${process.env.FURL}/#/register/${code}">Register here</a>`;
        mail.email = data.email;
        return await mailer(mail);
    } else return { err: true, message: "Mail already registered" };
};

// Login
exports.login = async (data) => {
    const { email, password } = data;
    const info = await User.findOne({ Email: email }, 'password');
    return info && await bcrypt.compare(password, info.password)
        .then(async (ok) => {
            if (ok) return await tokener.generate({ id: info._id }, process.env.SECRET_KEY);
            else return await { err: true, message: "Incorrect password" }
        })
        .catch(err => { return { err: true, message: "Out of service" } }) || { err: true, message: "User not found" };
};

// Registration
exports.register = async (email, data) => {
    const { profile, name, mobileno, password, about } = data;
    return await User.create({ Profile: profile, Name: name, Email: email, MobileNo: mobileno, password: await bcrypt.hash(password, await bcrypt.genSalt(10)), About: about })
        .then(async (info) => { return await tokener.generate({ id: info._id }, process.env.SECRET_KEY) })
        .catch((err) => { return { err: true, message: err.message } });
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
        reset = (await tokener.generate({ id: data._id, email: data.Email }, process.env.SECRET_KEY)).message.token;
        mail.subject = "SociaLod password reset";
        mail.template = `Create new password from the below link <a href="${process.env.FURL}/#/reset/${reset}">Reset</a>`;
        mail.email = data.Email;
        return await mailer(mail);
    } else return { err: true, message: "Mail not registered" };
};

// Reset password
exports.reset = async (payload, password) => {
    return await User.findOneAndUpdate({ _id: payload.id, Email: payload.email }, { $set: { password: await bcrypt.hash(password, await bcrypt.genSalt(10)) } })
        .then(() => { return { err: false, message: "Password reset successful" } })
        .catch((err) => { return { err: true, message: "Out of service" } });
};
