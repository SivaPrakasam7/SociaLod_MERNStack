const User = require('../../../infrastructure/db/models/user/user'),
    scraper = require('../scrap_services/scrap');

// Add new social media
exports.newMedia = async (id, data) => {
    const { site, username } = data;
    const info = await scraper.scrap(username, site);
    if (!info.err) {
        return await User.findOneAndUpdate({ _id: id }, { $set: { [site]: info.message[0] } }, { new: true, select: "-password -Views" })
            .then((info) => { return { err: false, message: info } })
            .catch((err) => { return { err: true, message: err } });
    } else return info;
};

// Delete new social media
exports.removeMedia = async (id, data) => {
    const { site } = data;
    return await User.findOneAndUpdate({ _id: id }, { $set: { [site]: null } }, { new: true, select: "-password -Views" })
        .then((info) => { return { err: false, message: info } })
        .catch((err) => { return { err: true, message: err } });
};

// View other user details
exports.viewUser = async (id, data) => {
    const { userid } = data;
    return await User.findOneAndUpdate({ _id: userid }, { $push: { Views: id } }, { new: true, select: "-password -Views" })
        .then((info) => { return { err: false, message: info } })
        .catch((err) => { return { err: true, message: err } });
}

// Notification for profile view
exports.notification = async (id) => {
    return await User.findOne({ _id: { $in: (await User.findOne({ _id: id }, 'Views')).Views } }, "Name Profile Email About")
        .then((info) => { return { err: false, message: info } })
        .catch((err) => { return { err: true, message: err } });
}

// Search by username
exports.search = async (data) => {
    const { username } = data;
    return await User.find({ Name: new RegExp(username, 'i') }, "-password -Views")
        .then((info) => { return { err: false, message: info } })
        .catch((err) => { return { err: true, message: err } });
}