const User = require('../../../infrastructure/db/models/user/user'),
    scraper = require('../scrap_services/scrap');

// User info
exports.user = async (data) => {
    return await User.findOne({ _id: data.id }, '-password')
        .then((info) => { return { err: false, message: info } })
        .catch((err) => { return { err: true, message: err } });
}

// Edit user details
exports.edit = async (data) => {
    const { name, mobileno, about } = data;
    return await User.findOneAndUpdate({ _id: data.status.uid.message.id }, { $set: { Name: name, MobileNo: mobileno, About: about } })
        .then(() => { return { err: false, message: "User info updated" } })
        .catch((err) => { return { err: true, message: err } });
}

// Delete user
exports.delete = async (data) => {
    return await User.findOneAndDelete({ _id: data.id })
        .then(() => { return { err: false, message: "User account deleted successfully" } })
        .catch((err) => { return { err: true, message: err } });
}

// Add new social media
exports.newMedia = async (id, data) => {
    const { site, username } = data;
    const networks = {};
    const info = await scraper.scrap(username, site);
    if (!info.err) {
        networks[site] = info.message;
        return await User.findOneAndUpdate({ _id: id }, { $set: { Networks: networks } })
            .then(() => { return { err: false, message: "User info updated" } })
            .catch((err) => { return { err: true, message: err } });
    } else return info;
}

// Delete new social media
exports.removeMedia = async (id, data) => {
    const { site } = data;
    const networks = {};
    networks[site] = null;
    return await User.findOneAndUpdate({ _id: id }, { $set: { Networks: networks } })
        .then(() => { return { err: false, message: "User info updated" } })
        .catch((err) => { return { err: true, message: err } });
}

