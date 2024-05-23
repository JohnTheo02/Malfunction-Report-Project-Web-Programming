const express = require('express');
const controller = require('../controllers/adminInSufficient-controller');
const authenticationController = require('../controllers/sign-controller');


const router = express.Router();

router.use((req, res, next) => {
    next();
});

router.get('/', authenticationController.checkAuthenticated,authenticationController.checkAdmin,controller.getAllInSufficientForms);


module.exports = router; 