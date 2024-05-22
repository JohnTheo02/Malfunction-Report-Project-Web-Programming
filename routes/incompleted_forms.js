const express = require('express');
const controller = require('../controllers/incompleted_forms-controller');
const authenticationController = require('../controllers/sign-controller');
const router = express.Router();

router.use((req, res, next) => {
    next();
});

router.get('/', authenticationController.checkAuthenticated,authenticationController.checkUser,controller.getInCompletedFormsById, controller.goToInCompletedForms);

module.exports = router;