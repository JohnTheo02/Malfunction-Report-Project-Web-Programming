const express = require('express');
const controller = require('../controllers/profile-controller');
const authenticationController = require('../controllers/sign-controller');

const router = express.Router();

router.use((req, res, next) => {
    next();
});

router.get('/', authenticationController.checkAuthenticated,authenticationController.checkUser,controller.getInCompletedFormsById,controller.getCompletedFormsById,controller.  getInSufficientFormsById, controller.getUsernameById);
router.get('/signout', authenticationController.checkAuthenticated,authenticationController.checkUser, authenticationController.signOut);

module.exports = router;

