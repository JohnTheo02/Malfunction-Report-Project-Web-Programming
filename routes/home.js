
const express = require('express');
const controller = require('../controllers/home-controller.js');
//const authenticationController = require('../controllers/login');

const router = express.Router();

router.use((req, res, next) => {
    next();
});

const taskListController = await import(`../controller/home.js`)

router.route('/').get((req, res) => { res.redirect('/home') });

module.exports = router;