const express = require('express');
const multer = require('multer');
const router = express.Router();
const controller = require('../controllers/form1-controller');
const authenticationController = require('../controllers/sign-controller');

// Configure multer to use memory storage
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.use((req, res, next) => {
    next();
});

router.get('/', authenticationController.checkAuthenticated, authenticationController.checkUser, controller.getBuildings, controller.getDamageType, controller.getClassName, controller.getSeverity, controller.goToForm);

router.post('/submit', authenticationController.checkAuthenticated, authenticationController.checkUser, upload.single('file_path'), controller.submitEvent);

module.exports = router;
