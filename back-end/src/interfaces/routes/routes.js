const express = require('express'),
    router = express.Router();

// Import files
const requests = require('../middleware/requestHandler'),
    secure = require('../../application/security/requestFilter');

/*** Routes ***/

/* Authentication services */

// Token verify
router.route('/auth/verify').get(secure.token);

// Login authentication
router.route('/auth/login').post(secure.body, requests.login);

// Registrations
router.route('/auth/register').post(secure.body, requests.register);

// Logout
router.route('/auth/logout').get(secure.token, requests.logout);

// Forget password
router.route('/auth/forget').post(secure.body, requests.forget);

// Reset password
router.route('/auth/reset').post(secure.tokenDestroy, requests.resetpass);

/* User services */

// Get user details
router.route('/user/get').get(secure.token, requests.user);

// Edit user details
router.route('/user/edit').post(secure.tokenBody, requests.edit);

// Delete user
router.route('/user/delete').get(secure.tokenDestroy, requests.delete);

/* Main services */

// Add media
router.route('/service/new_media').post(secure.tokenBody, requests.newMedia);

// Remove media
router.route('/service/remove_media').post(secure.tokenBody, requests.removeMedia);

// Notification
router.route('/service/notification').get(secure.token, requests.notification);

// Search users
router.route('/service/search').post(secure.tokenBody, requests.search);

// View user detail and increase view count
router.route('/service/view_user').post(secure.tokenBody, requests.viewUser);

// Single scraper
router.route('/service/scrap').post(secure.tokenBody, requests.scraper);

// All entities scraper
// router.route('/service/check').post(secure.token, requests.checker);

module.exports = router;