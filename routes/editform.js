const express = require('express');
const router = express.Router();
const controller = require('../controllers/editform-controller');
const form2Controller = require('../controllers/form2-controller');
const form1Controller = require('../controllers/form1-controller');
const authenticationController = require('../controllers/sign-controller');


router.use((req, res, next) => {
    next();
});

router.get('/',  authenticationController.checkAuthenticated,authenticationController.checkUser,controller.getFormById);
router.get('/:id',authenticationController.checkAuthenticated,authenticationController.checkUser,form2Controller.getAllClassNames, controller.getFormById);
router.get('/delete/:id',authenticationController.checkAuthenticated,authenticationController.checkUser,controller.deleteForm);
router.post('/update/:id',authenticationController.checkAuthenticated,authenticationController.checkUser, controller.updateForm);
router.get('/edit/:id', authenticationController.checkAuthenticated,authenticationController.checkUser, controller.getFormById);



module.exports = router;
