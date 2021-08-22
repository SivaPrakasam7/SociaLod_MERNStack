const tokener = require("../../domain/Tokener"),
  Body = require("../../infrastructure/db/models/security/body");

/*** POST method filters ***/

/* Authendication service */

// Check body
exports.body = async (req, res, next) => {
  const body = new Body(req.body);
  const err = body.validateSync();
  if (!err) {
    req.body = body;
    next();
  } else next(err);
};

/* User service */

// Check token and body
exports.tokenBody = async (req, res, next) => {
  try {
    const uid = await tokener.verify(
      req.headers.authorization.split(" ")[1],
      process.env.SECRET_KEY
    );
    if (!uid.err) {
      const body = new Body(req.body);
      const err = body.validateSync();
      if (!err) {
        req.body = body;
        req.status = { uid: uid };
        next();
      } else next(err);
    } else next(uid);
  } catch {
    next({ err: true, message: "token not found" });
  }
};

// Scheck token, body and destroy token
exports.tokenBodyDestroy = async (req, res, next) => {
  try {
    const uid = await tokener.verify(
      req.headers.authorization.split(" ")[1],
      process.env.SECRET_KEY
    );
    const info = await tokener.destroy(token, uid);
    if (!info.err) {
      const body = new Body(req.body);
      const err = body.validateSync();
      if (!err) {
        req.body = body;
        req.status = { uid: uid };
        next();
      } else next(err);
    } else next(info);
  } catch {
    next({ err: true, message: "token not found" });
  }
};

/* GET method filters */

// Token security
exports.token = async (req, res, next) => {
  try {
    const uid = await tokener.verify(
      req.headers.authorization.split(" ")[1],
      process.env.SECRET_KEY
    );
    if (!uid.err) {
      req.status = { uid: uid };
      next();
    } else next(uid);
  } catch {
    next({ err: true, message: "token not found" });
  }
};

// Delete token
exports.tokenDestroy = async (req, res, next) => {
  try {
    const uid = await tokener.verify(
      req.headers.authorization.split(" ")[1],
      process.env.SECRET_KEY
    );
    const info = await tokener.destroy(token, uid);
    if (!info.err) {
      req.status = { uid: uid };
      next();
    } else next(info);
  } catch {
    next({ err: true, message: "token not found" });
  }
};
