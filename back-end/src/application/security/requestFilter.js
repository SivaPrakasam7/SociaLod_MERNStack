/* Authendication service */

// Login security
exports.login = (req, res, next) => {
    req.security = { secure: true };
    next();
}

// Registration security
exports.register = (req, res, next) => {
    req.security = { secure: true };
    next();
}

// Logout security
exports.logout = (req, res, next) => {
    req.security = { secure: true };
    next();
}

/* Scrap service */

// Scrap security
exports.scraper = (req, res, next) => {
    req.security = { secure: true };
    next();
}

// Checker security
exports.checker = (req, res, next) => {
    req.security = { secure: true };
    next();
}