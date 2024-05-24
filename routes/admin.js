const express = require('express');
const controller = require('../controllers/admin-controller');
const authenticationController = require('../controllers/sign-controller');

const router = express.Router();

router.use((req, res, next) => {
    next();
});

router.get('/',authenticationController.checkAuthenticated,authenticationController.checkAdmin,controller.getAllInCompletedForms,controller.getAllCompletedForms, controller.getAllInSufficientForms );
router.get('/signout',authenticationController.checkAuthenticated,authenticationController.checkAdmin,authenticationController.signOut);

module.exports = router;

