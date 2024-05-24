const express = require('express');
const controller = require('../controllers/updateLoc-controller');
const authenticationController = require('../controllers/sign-controller');

const router = express.Router();

router.use((req, res, next) => {
    next();
});

router.get('/:id', authenticationController.checkAuthenticated, authenticationController.checkUser, controller.getupdateLocPage);
router.post('/:id', authenticationController.checkAuthenticated, authenticationController.checkUser, controller.updateFormLoc);
router.post('/updateCoords/:id', authenticationController.checkAuthenticated, authenticationController.checkUser,controller.updateLocation);

module.exports = router;
