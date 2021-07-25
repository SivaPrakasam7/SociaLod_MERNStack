const scrap = require('../../application/services/scrap_services/scrap'),
    validation = require('../../application/services/auth_services/validation'),
    authendication = require('../../application/services/auth_services/auth'),
    useraccess = require('../../application/services/user_services/user');

// Scraping services
exports.scraper = async (req, res, next) => {
    if (req.status.secure) {
        const info = await scrap.scrap(req.body.username, req.body.site);
        if (!info.err) return res.status(201).send(info.message);
        else return next(info);
    }
};

exports.checker = async (req, res, next) => {
    if (req.status.secure) {
        const info = await scrap.check(req.body.username, req.body.site);
        if (!info.err) {
            return res.status(201).send(info.message)
        } else return next(info);
    }
};

/* Authendication services */

// loginx
exports.login = async (req, res, next) => {
    if (req.status.secure) {
        const validate = validation.loginValidation(req.body);
        if (!validate.code) {
            const info = await authendication.login(req.body);
            if (!info.err) {
                return res.status(201).send(info.message)
            } else return next(info);
        }
        else return next(validate);
    }
};

// register
exports.register = async (req, res, next) => {
    if (req.status.secure) {
        const validate = validation.registerValidation(req.body);
        if (!validate.code) {
            const info = await authendication.register(req.body);
            if (!info.err) {
                return res.status(201).send(info.message)
            } else return next(info);
        }
        else return next(validate);
    }
};

// Logout
exports.logout = async (req, res, next) => {
    if (req.status.secure) {
        const info = await authendication.logout(req, req.status.uid);
        if (!info.err) {
            return res.status(201).send(info.message)
        } else return next(info);
    }
};

// Forget
exports.forget = async (req, res, next) => {
    if (req.status.secure) {
        const info = await authendication.forget(req.body.email);
        if (!info.err) {
            return res.status(201).send(info.message);
        } else return next(info);
    }
};

// Reset
exports.resetpass = async (req, res, next) => {
    if (req.status.secure) {
        const info = await authendication.reset(req.status.uid.message, req.body.password);
        if (!info.err) {
            return res.status(201).send(info.message);
        } else return next(info);
    }
};

/* User services */

// User info
exports.user = async (req, res, next) => {
    if (req.status.secure) {
        const info = await useraccess.user(req.status.uid.message);
        if (!info.err) {
            return res.status(201).send(info.message);
        } else return next(info);
    }
};

// Edit user details
exports.edit = async (req, res, next) => {
    if (req.status.secure) {
        const info = await useraccess.edit(req);
        if (!info.err) {
            return res.status(201).send(info.message);
        } else return next(info);
    }
};

// Delete user
exports.delete = async (req, res, next) => {
    if (req.status.secure) {
        const info = await useraccess.delete(req.status.uid.message);
        if (!info.err) {
            return res.status(201).send(info.message);
        } else return next(info);
    }
};

// Add new social media
exports.newMedia = async (req, res, next) => {
    if (req.status.secure) {
        const info = await useraccess.newMedia(req.status.uid.message.id, req.body);
        if (!info.err) {
            return res.status(201).send(info.message);
        } else return next(info);
    }
};

// Remove social media
exports.removeMedia = async (req, res, next) => {
    if (req.status.secure) {
        const info = await useraccess.removeMedia(req.status.uid.message.id, req.body);
        if (!info.err) {
            return res.status(201).send(info.message);
        } else return next(info);
    }
};