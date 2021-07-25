const express = require('express'),
    router = express.Router();

// Import files

const requests = require('../middleware/requestHandler'),
    secure = require('../../application/security/requestFilter');


/*** Routes ***/

/* Authentication services */

// API info
router.route('/').get();

// Login authentication
router.route('/auth/login').post(secure.login, requests.login);

// Registrations
router.route('/auth/register').post(secure.register, requests.register);

// Logout
router.route('/auth/logout').get(secure.token, requests.logout);

// Forget password
router.route('/auth/forget').post(secure.forget, requests.forget);

// Reset password
router.route('/auth/reset/:resetPass').post(secure.tokenD, requests.resetpass);

// Token reset
// router.route('/auth/treset').get();

/* User services */

// Get user details
router.route('/user/get').get(secure.token, requests.user);

// Edit user details
router.route('/user/edit').post(secure.edit, requests.edit);

// Delete user
router.route('/user/delete').get(secure.tokenD, requests.delete);

// Add media
router.route('/user/new_media').post(secure.newMedia, requests.newMedia);

// Remove media
router.route('/user/remove_media').post(secure.removeMedia, requests.removeMedia);

// router.route('/user/notification').get();

/* Main services */

// Search users
// router.route('/service/search').get(secure.token);

// View user detail and increase view count
// router.route('/service/:userID').post();

// Single scraper
router.route('/service/scrap').post(secure.token, requests.scraper);

// All entities scraper
// router.route('/service/check').post(secure.token, requests.checker);

module.exports = router;