const express = require('express');
const controller = require('../controllers/completed_forms-controller');
const authenticationController = require('../controllers/sign-controller');

const router = express.Router();

router.use((req, res, next) => {
    next();
});

router.get('/',authenticationController.checkAuthenticated,authenticationController.checkUser, controller.getCompletedFormsById, controller.goToCompletedForms);

module.exports = router;