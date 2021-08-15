const Browser = require('../../../domain/XSEngine'),
    walker = require('../util_services/utils').walker;

// Scrap services
exports.scrap = async (username, site) => {
    const Site = require(`../../../infrastructure/db/models/sites/${site}`).model;
    const ainfo = await Site.findOne({ Username: username })
        .then((info) => { return { err: false, message: info } })
        .catch((err) => { return { err: true, message: err } });
    if (ainfo.message === "" || !ainfo.message) {
        const info = await Browser.scrap(username, require(`../../../entities/${site}`)).catch((err) => { return { err: true, message: err } });
        if (info.err) return info;
        return await Site.create(info)
            .then((info) => { return { err: false, message: info } })
            .catch((err) => { return { err: true, message: err } });
    } else return ainfo;
};

// status -- under development
exports.check = async (username) => {
    const results = {};
    for (var v of walker('../../../entities', 'js')) {
        await Browser.scrap(username, require(v.path))
            .then(info => {
                results[v.categeory] = { err: true, message: require(`../../../infrastructure/db/models/sites/${v.categeory}`).model(info) };
            })
            .catch(err => { results[v.categeory] = { err: true, message: err } });
    }
    return results;
};