const Browser = require('../../../domain/XSEngine'),
    walker = require('../util_services/utils').walker;

// Scrap services
exports.scrap = async (query, site) => {
    const Site = require(`../../../infrastructure/db/models/sites/${site}`).model;
    const ainfo = await Site.findOne({ Query: query })
        .then((info) => { return { err: false, message: info } })
        .catch((err) => { return { err: true, message: err } });
    if (ainfo.message === "" || !ainfo.message) {
        const info = await Browser.scrap(query, require(`../../../entities/${site}`)).catch((err) => { return { err: true, message: err } });
        if (info.err) return info;
        return await Site.create(info)
            .then((info) => { return { err: false, message: info } })
            .catch((err) => { return { err: true, message: "Out of service" } });
    } else return ainfo;
};

// status -- under development
exports.check = async (query) => {
    const results = {};
    for (var v of walker('../../../entities', 'js')) {
        await Browser.scrap(query, require(v.path))
            .then(info => {
                results[v.categeory] = { err: true, message: require(`../../../infrastructure/db/models/sites/${v.categeory}`).model(info) };
            })
            .catch(err => { results[v.categeory] = { err: true, message: "Out of service" } });
    }
    return results;
};