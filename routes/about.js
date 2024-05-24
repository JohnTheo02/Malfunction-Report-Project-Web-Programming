const express = require('express');
const controller = require('../controllers/about-controller');

const router = express.Router();

router.use((req, res, next) => {
    next();
});

router.get('/',controller.getAboutPage);

module.exports = router;