const bcrypt = require('bcrypt'),
    User = require('../../../infrastructure/db/models/user/user'),
    tokener = require('../../../domain/Tokener');

// Login
exports.login = async (data) => {
    const { email, password } = data;
    const info = await User.findOne({ Email: email }, 'password');
    return bcrypt.compare(password, info.password)
        .then(async (ok) => { return await tokener.generate({ id: info._id }, process.env.SECRET_KEY) })
        .catch(err => { return { err: true, message: err } });
}

// Registration
exports.register = async (data) => {
    const { name, email, mobileno, password, about } = data;
    return User.create({ Name: name, Email: email, MobileNo: mobileno, password: await bcrypt.hash(password, await bcrypt.genSalt(10)), About: about })
        .then(async (info) => { return await tokener.generate({ id: info._id }, process.env.SECRET_KEY) })
        .catch((err) => { return { err: true, message: err } });
}

// Verification
exports.verify = async (data) => {
    return await tokener.verify(data.headers.authorization.split(' ')[1], process.env.SECRET_KEY)
}

// Logout
exports.logout = async (data) => {
    return await tokener.destroy(data.headers.authorization.split(' ')[1], process.env.SECRET_KEY);
}