const express = require('express');
const controller = require('../controllers/profile-controller');
const authenticationController = require('../controllers/sign-controller');

const router = express.Router();

router.use((req, res, next) => {
    next();
});

router.get('/', authenticationController.checkAuthenticated, controller.getUsernameById, controller.loadProfile);
router.get('/signout', authenticationController.checkAuthenticated, authenticationController.signOut);

module.exports = router;

