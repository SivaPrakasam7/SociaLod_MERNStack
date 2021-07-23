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
router.route('/auth/logout').get(secure.logout, requests.logout);

// // Forget password
// router.route('/auth/reset').post();

// // Token reset
// router.route('/auth/treset').get();

// /* User services */

// // Get user details
// router.route('/user/get').get();

// // Edit user details
// router.route('/user/edit').post();

// // Delete user
// router.route('/user/delete').get();

// router.route('/user/notification').get();

// /* Main services */

// // Search users
// router.route('/service/search').post();

// // View user detail and increase view count
// router.route('/service/userID').post();

// Single scraper
router.route('/service/scrap').post(secure.scraper, requests.scraper);

// All entities scraper
router.route('/service/check').post(secure.checker, requests.checker);

module.exports = router;