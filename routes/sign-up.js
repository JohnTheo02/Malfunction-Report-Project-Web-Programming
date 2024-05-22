const express = require('express');
const controller = require('../controllers/sign-controller');

const router = express.Router();

router.use((req, res, next) => {
    next();
});

router.get('/', controller.goToRegistrationPage);
router.post('/', controller.checkAuthenticated, controller.signUp);

module.exports = router;  