const tokener = require('../../domain/Tokener');

/*** POST method filters ***/

/* Authendication service */

// Login security
exports.login = (req, res, next) => {
    req.status = { secure: true };
    next();
}

// Registration security
exports.register = (req, res, next) => {
    req.status = { secure: true };
    next();
}

// Forget security
exports.forget = (req, res, next) => {
    req.status = { secure: true };
    next();
}

/* User service */

// Add new socila media security
exports.newMedia = async (req, res, next) => {
    const uid = await tokener.verify(req.headers.authorization.split(' ')[1], process.env.SECRET_KEY);
    if (!uid.err) {
        req.status = { secure: true, uid: uid };
        next();
    } else next(uid);
}

// remove social media security
exports.removeMedia = async (req, res, next) => {
    const uid = await tokener.verify(req.headers.authorization.split(' ')[1], process.env.SECRET_KEY);
    if (!uid.err) {
        req.status = { secure: true, uid: uid };
        next();
    } else next(uid);
}

// User detail edit
exports.edit = async (req, res, next) => {
    const uid = await tokener.verify(req.headers.authorization.split(' ')[1], process.env.SECRET_KEY);
    if (!uid.err) {
        req.status = { secure: true, uid: uid };
        next();
    } else next(uid);
}

/* GET method filters */

// Token security
exports.token = async (req, res, next) => {
    const uid = await tokener.verify(req.headers.authorization.split(' ')[1], process.env.SECRET_KEY);
    if (!uid.err) {
        req.status = { secure: true, uid: uid };
        next();
    } else next(uid);
}

// Delete token
exports.tokenD = async (req, res, next) => {
    const uid = await tokener.verify(req.headers.authorization.split(' ')[1], process.env.SECRET_KEY);
    const info = await tokener.destroy(token, uid);
    if (!info.err) {
        req.status = { secure: true, uid: info };
        next();
    } else next(info);
}