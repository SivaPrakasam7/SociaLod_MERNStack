const scrap = require('../../application/services/scrap_services/scrap'),
    validation = require('../../application/services/auth_services/validation'),
    authendication = require('../../application/services/auth_services/auth');

// Scraping services
exports.scraper = async (req, res, next) => {
    if (req.security.secure) {
        const info = await authendication.verify(req);
        if (!info.err) {
            const info = await scrap.scrap(req.body.username, req.body.site);
            if (!info.err) return res.status(201).send(info.message);
            else return next(info);
        } else return next(info);
    }
};

exports.checker = async (req, res, next) => {
    if (req.security.secure) {
        const info = await scrap.check(req.body.username, req.body.site);
        if (!info.err) {
            return res.status(201).send(info.message)
        } else return next(info);
    }
};

/* Authendication services */

// loginx
exports.login = async (req, res, next) => {
    if (req.security.secure) {
        const validate = validation.loginValidation(req.body);
        if (!validate.code) {
            const info = await authendication.login(req.body);
            if (!info.err) {
                return res.status(201).send(info.message)
            } else return next(info);
        }
        else return next(validate);
    }
}

// register
exports.register = async (req, res, next) => {
    if (req.security.secure) {
        const validate = validation.registerValidation(req.body);
        if (!validate.code) {
            const info = await authendication.register(req.body);
            if (!info.err) {
                return res.status(201).send(info.message)
            } else return next(info);
        }
        else return next(validate);
    }
}

// Logout

exports.logout = async (req, res, next) => {
    if (req.security.secure) {
        const info = await authendication.logout(req);
        if (!info.err) {
            return res.status(201).send(info.message)
        } else return next(info);
    }
}