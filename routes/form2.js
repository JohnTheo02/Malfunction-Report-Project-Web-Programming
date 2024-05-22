const express = require('express');
const controller = require('../controllers/form2-controller');
const form1Controller = require('../controllers/form1-controller');
const authenticationController = require('../controllers/sign-controller');
const router = express.Router();

router.use((req, res, next) => {
    next();
});

router.get('/',authenticationController.checkAuthenticated,authenticationController.checkUser,controller.getLocationById,controller.getAllClassNames,form1Controller.getSeverity,form1Controller.getDamageType, controller.goToForm2);
router.post('/submit',authenticationController.checkAuthenticated,authenticationController.checkUser, controller.getLocationById, controller.submitEvent); // Χρησιμοποιώντας post για την υποβολή της φόρμας

module.exports = router;
