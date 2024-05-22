const express = require('express');
const controller = require('../controllers/location-controller');
const authenticationController = require('../controllers/sign-controller');


const router = express.Router();

router.use((req, res, next) => {
    next();
});

router.get('/', authenticationController.checkAuthenticated,controller.getLocationSelectionPage);

module.exports = router;