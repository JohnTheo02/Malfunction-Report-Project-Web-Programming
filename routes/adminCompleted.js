const express = require('express');
const controller = require('../controllers/adminCompleted-controller');

//const authenticationController = require('../controllers/login');

const router = express.Router();

router.use((req, res, next) => {
    next();
});

router.get('/', controller.getAllCompletedForms, controller.goToAdminCompletedForms);
router.get('/makeInComplete/:id', controller.changeFormToInComplete);


module.exports = router;