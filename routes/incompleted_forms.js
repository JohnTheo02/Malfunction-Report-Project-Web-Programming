const express = require('express');
const controller = require('../controllers/incompleted_forms-controller');

//const authenticationController = require('../controllers/login');

const router = express.Router();

router.use((req, res, next) => {
    next();
});

router.get('/', controller.getInCompletedFormsById, controller.goToInCompletedForms);

module.exports = router;