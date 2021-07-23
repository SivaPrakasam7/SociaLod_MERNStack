const Browser = require('../../../domain/XSEngine'),
    walker = require('../util_services/utils').walker;

// Scrap services
exports.scrap = async (username, site) => {
    const info = await (new Browser(username, require(`../../../entities/${site}`))).scrap().catch((err) => { return { err: true, message: err } });
    // console.log(info);
    if (info.err) return info;
    return { err: false, message: require(`../../../infrastructure/db/models/sites/${site}`).model(info) };
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