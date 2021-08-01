const Browser = require('../../../domain/XSEngine'),
    walker = require('../util_services/utils').walker;

// Scrap services
exports.scrap = async (username, site) => {
    const Site = require(`../../../infrastructure/db/models/sites/${site}`).model;
    const ainfo = await Site.find({ Username: username })
        .then((info) => { return { err: false, message: info } })
        .catch((err) => { return { err: true, message: err } });
    if (ainfo.message.join() === "") {
        const info = await (new Browser(username, require(`../../../entities/${site}`))).scrap().catch((err) => { return { err: true, message: err } });
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
        await ((new Browser(username, require(v.path))).scrap())
            .then(info => {
                console.log(v.categeory, require(`../../../infrastructure/db/models/sites/${v.categeory}`).model(info));
                results[v.categeory] = { err: true, message: require(`../../../infrastructure/db/models/sites/${v.categeory}`).model(info) };
            })
            .catch(err => { results[v.categeory] = { err: true, message: err } });
    }
    return results;
};