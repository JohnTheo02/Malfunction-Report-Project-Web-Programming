const express = require('express');
const controller = require('../controllers/adminViewForm-controller');
//const authenticationController = require('../controllers/login');

const router = express.Router();

router.use((req, res, next) => {
    next();
});

router.get('/', controller.getUsernameById,controller.getFormById, controller.goToAdminViewForm);
router.get('/:id', controller.getUsernameById,controller.getFormById, controller.goToAdminViewForm);
router.get('/updatestatus/:id', controller.changeFormToCompleted);


module.exports = router;