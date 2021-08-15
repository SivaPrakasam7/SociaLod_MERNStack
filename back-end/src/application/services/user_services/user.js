const User = require('../../../infrastructure/db/models/user/user');

// User info
exports.user = async (id) => {
    return await User.findOne({ _id: id }, "-password -Views")
        .then((info) => { return { err: false, message: info } })
        .catch((err) => { return { err: true, message: "Out of service" } });
};

// Edit user details
exports.edit = async (id, data) => {
    const { name, mobileno, about } = data;
    return await User.findOneAndUpdate({ _id: id }, { $set: { Name: name, MobileNo: mobileno, About: about } }, { new: true, select: "-password -Views" })
        .then((info) => { return { err: false, message: info } })
        .catch((err) => { return { err: true, message: "Out of service" } });
};

// Delete user
exports.delete = async (id) => {
    return await User.findOneAndDelete({ _id: id })
        .then(() => { return { err: false, message: "User account deleted successfully" } })
        .catch((err) => { return { err: true, message: "Out of service" } });
};