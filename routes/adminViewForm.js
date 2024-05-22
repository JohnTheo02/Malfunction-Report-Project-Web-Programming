const express = require('express');
const controller = require('../controllers/adminViewForm-controller');
const authenticationController = require('../controllers/sign-controller');

const router = express.Router();

router.use((req, res, next) => {
    next();
});

router.get('/', authenticationController.checkAuthenticated,authenticationController.checkAdmin,controller.getUsernameById,controller.getFormById, controller.goToAdminViewForm);
router.get('/:id', authenticationController.checkAuthenticated,authenticationController.checkAdmin,controller.getUsernameById,controller.getFormById, controller.goToAdminViewForm);
router.get('/updatestatus/:id',authenticationController.checkAuthenticated,authenticationController.checkAdmin, controller.changeFormToCompleted);


module.exports = router;