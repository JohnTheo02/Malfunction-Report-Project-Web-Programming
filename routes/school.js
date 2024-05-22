const express = require('express');
const controller = require('../controllers/school-controller');
const authenticationController = require('../controllers/sign-controller');

const router = express.Router();

router.use((req, res, next) => {
    next();
});

router.get('/', authenticationController.checkAuthenticated,controller.getSchoolPage);

router.post('/submit/', authenticationController.checkAuthenticated,controller.getSelectedDepartmentBuildings, controller.getSelectedDepartmentClasses);

module.exports = router;