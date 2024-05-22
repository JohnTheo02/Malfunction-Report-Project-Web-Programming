const express = require('express');
const controller = require('../controllers/sign-controller');

const router = express.Router();

router.use((req, res, next) => {
    next();
});


router.get('/', controller.goToAuthenticationPage);
router.post('/', controller.checkAuthenticated, controller.signIn);

module.exports = router;   