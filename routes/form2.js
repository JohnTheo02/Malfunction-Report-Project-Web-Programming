const express = require('express');
const multer = require('multer');
const controller = require('../controllers/form2-controller');
const form1Controller = require('../controllers/form1-controller');
const authenticationController = require('../controllers/sign-controller');
const router = express.Router();


// Configure multer to use memory storage
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.use((req, res, next) => {
    next();
});

router.get('/',authenticationController.checkAuthenticated,authenticationController.checkUser,controller.getLocationById,controller.getAllClassNames,form1Controller.getSeverity,form1Controller.getDamageType, controller.goToForm2);
router.post('/submit',authenticationController.checkAuthenticated,authenticationController.checkUser, controller.getLocationById, upload.single('file_path'), controller.submitEvent); // Χρησιμοποιώντας post για την υποβολή της φόρμας

module.exports = router;
