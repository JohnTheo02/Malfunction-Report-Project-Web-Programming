const express = require('express');
const controller = require('../controllers/adminAddComments-controller');
const authenticationController = require('../controllers/sign-controller');

const router = express.Router();

router.use((req, res, next) => {
    next();
});

router.get('/', authenticationController.checkAuthenticated, authenticationController.checkAdmin, controller.getUsernameById, controller.getFormById, controller.goToAdminAddComment);
router.get('/:id', authenticationController.checkAuthenticated, authenticationController.checkAdmin, controller.getUsernameById, controller.getFormById, controller.goToAdminAddComment);
router.post('/submitComment/:id', authenticationController.checkAuthenticated, authenticationController.checkAdmin, controller.submitComment);

module.exports = router;
