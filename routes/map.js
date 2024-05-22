const express = require('express');
const controller = require('../controllers/map-controller');
const authenticationController = require('../controllers/sign-controller');

const router = express.Router();

router.use((req, res, next) => {
    next();
});

router.get('/',authenticationController.checkAuthenticated,authenticationController.checkUser, controller.getMap);
router.post('/sendCoords',authenticationController.checkAuthenticated,authenticationController.checkUser, controller.tempLocation);

module.exports = router;