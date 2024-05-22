const express = require('express');
const controller = require('../controllers/adminInCompleted-controller');
const authenticationController = require('../controllers/sign-controller');


const router = express.Router();

router.use((req, res, next) => {
    next();
});

router.get('/', authenticationController.checkAuthenticated,authenticationController.checkAdmin,controller.getAllInCompletedForms, controller.goToAdminInCompletedForms);

module.exports = router;