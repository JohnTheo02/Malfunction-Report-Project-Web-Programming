const express = require('express');
const passport = require('passport');
const controller = require('../controllers/form1-controller');
const authenticationController = require('../controllers/sign-controller');

const router = express.Router();

router.use((req, res, next) => {
    next();
});

router.get('/', authenticationController.checkAuthenticated, controller.getBuildings,controller.getDamageType, controller.getClassName,controller.getSeverity, controller.goToForm);

router.post('/submit',authenticationController.checkAuthenticated,  controller.getBuildings,controller.getDamageType, controller.getClassName,controller.getSeverity,controller.submitEvent); // Χρησιμοποιώντας post για την υποβολή της φόρμας

module.exports = router;
