const express = require('express');
const controller = require('../controllers/adminCompleted-controller');
const authenticationController = require('../controllers/sign-controller');


const router = express.Router();

router.use((req, res, next) => {
    next();
});

router.get('/', authenticationController.checkAuthenticated,authenticationController.checkAdmin,controller.getAllCompletedForms, controller.goToAdminCompletedForms);
router.get('/makeInComplete/:id', authenticationController.checkAuthenticated,authenticationController.checkAdmin,controller.changeFormToInComplete);


module.exports = router;