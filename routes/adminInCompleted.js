const express = require('express');
const controller = require('../controllers/adminInCompleted-controller');

//const authenticationController = require('../controllers/login');

const router = express.Router();

router.use((req, res, next) => {
    next();
});

router.get('/', controller.getAllInCompletedForms, controller.goToAdminInCompletedForms);

module.exports = router;