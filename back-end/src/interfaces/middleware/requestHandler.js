const scrap = require('../../application/services/scrap_services/scrap'),
    authendication = require('../../application/services/auth_services/auth'),
    useraccess = require('../../application/services/user_services/user'),
    process = require('../../application/services/user_services/process'),
    dashboard=require('../../application/services/user_services/dashboard');

/* Dashboard data */

// dashboard data count
exports.dashboard=async (req,res,next)=>{
    const info = await dashboard.dashboard();
    if (!info.err) return res.send(info);
    else return next(info);
};

/* Authendication services */

// Mail verification
exports.secret = async (req, res, next) => {
    const info = await authendication.secret(req.body);
    if (!info.err) return res.send(info);
    else return next(info);
};

// Registration mail verification
exports.mailVerify = async (req, res, next) => {
    const info = await authendication.mailVerify(req.body);
    if (!info.err) return res.send(info);
    else return next(info);
};

// loginx
exports.login = async (req, res, next) => {
    const info = await authendication.login(req.body);
    if (!info.err) return res.send(info);
    else return next(info);
};

// register
exports.register = async (req, res, next) => {
    const info = await authendication.register(req.status.uid.message.email, req.body);
    if (!info.err) return res.status(201).send(info);
    else return next(info);
};

// Logout
exports.logout = async (req, res, next) => {
    const info = await authendication.logout(req, req.status.uid);
    if (!info.err) return res.status(201).send(info);
    else return next(info);
};

// Forget
exports.forget = async (req, res, next) => {
    const info = await authendication.forget(req.body.email);
    if (!info.err) return res.status(201).send(info.message);
    else return next(info);
};

// Reset
exports.resetpass = async (req, res, next) => {
    const info = await authendication.reset(req.status.uid.message, req.body.password);
    if (!info.err) return res.status(201).send(info);
    else return next(info);
};

/* User services */

// User info
exports.user = async (req, res, next) => {
    const info = await useraccess.user(req.status.uid.message.id);
    if (!info.err) return res.status(201).send(info);
    else return next(info);
};

// Edit user details
exports.edit = async (req, res, next) => {
    const info = await useraccess.edit(req.status.uid.message.id, req.body);
    if (!info.err) return res.status(201).send(info);
    else return next(info);
};

// Delete user
exports.delete = async (req, res, next) => {
    const info = await useraccess.delete(req.status.uid.message.id);
    if (!info.err) return res.status(201).send(info);
    else return next(info);
};

/* Main services */

// Add new social media
exports.newMedia = async (req, res, next) => {
    const info = await process.newMedia(req.status.uid.message.id, req.body);
    if (!info.err) return res.status(201).send(info);
    else return next(info);
};

// Remove social media
exports.removeMedia = async (req, res, next) => {
    const info = await process.removeMedia(req.status.uid.message.id, req.body);
    if (!info.err) return res.status(201).send(info);
    else return next(info);
};

// View other user detail
exports.viewUser = async (req, res, next) => {
    const info = await process.viewUser(req.status.uid.message.id, req.body);
    if (!info.err) return res.status(201).send(info);
    else return next(info);
}

// Notification for user profile view
exports.notification = async (req, res, next) => {
    const info = await process.notification(req.status.uid.message.id);
    if (!info.err) return res.status(201).send(info);
    else return next(info);
}

// Search by username
exports.search = async (req, res, next) => {
    const info = await process.search(req.body);
    if (!info.err) return res.status(201).send(info);
    else return next(info);
}

/* Scraping services */

// Single scraping service
exports.scraper = async (req, res, next) => {
    const info = await scrap.scrap(req.body.username.toLowerCase(), req.body.site);
    if (!info.err) return res.status(201).send(info);
    else return next(info);
};

// All site scraping service unused
exports.checker = async (req, res, next) => {
    const info = await scrap.check(req.body.username, req.body.site);
    if (!info.err) return res.status(201).send(info);
    else return next(info);
};

// Other services
exports.mailer = async (req, res, next) => {
    const info = await useraccess.mailService(req.status.uid.message.email, req.body);
    if (!info.err) return res.send(info);
    else return next(info);
};