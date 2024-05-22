const express = require('express');
const controller = require('../controllers/map-controller');

//const authenticationController = require('../controllers/login');

const router = express.Router();

router.use((req, res, next) => {
    next();
});

router.get('/', controller.getMap);
router.post('/sendCoords', controller.tempLocation);

module.exports = router;