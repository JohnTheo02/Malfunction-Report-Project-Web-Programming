const express = require('express');
const homeController = require('../controllers/home-controller.js');
const loginController = require('../controllers/sign-controller.js');

const router = express.Router();

// Import routers
const locationselectionRouter = require('./location.js');
const schoolRouter = require('./school.js');
const form1Router = require('./form1.js');
const form2Router = require('./form2.js');
const form3Router = require('./form3.js');
const mapRouter = require('./map.js');
const profileRouter = require('./profile.js');
const compformsRouter = require('./completed_forms.js');
const incompformsRouter = require('./incompleted_forms.js');
const editformRouter = require('./editform.js');
const adminRouter = require('./admin.js');
const adminCompletedRouter = require('./adminCompleted.js');
const adminInCompletedRouter = require('./adminInCompleted.js');
const adminViewFormRouter = require('./adminViewForm.js');
const signInRouter = require('./sign-in.js');
const signUpRouter = require('./sign-up.js');

router.use((req, res, next) => {
    next();
});


// Δρομολόγηση στην κατάλληλη σελίδα ανάλογα με τον τύπο του χρήστη
router.get('/', (req, res) => {
    if (req.session.loggedUserType === 'admin') {
        return res.redirect('/admin');
    } else if (req.session.loggedUserType === 'user') {
        return res.redirect('/home');
    } else {
        return res.redirect('/home');
    }
});

// Rest Routers
router.use('/location', locationselectionRouter);
router.use('/school', schoolRouter);
router.use('/form1', form1Router);
router.use('/form2', form2Router);
router.use('/form3', form3Router);
router.use('/map', mapRouter);
router.use('/profile', profileRouter);
router.use('/completed_forms', compformsRouter);
router.use('/incompleted_forms', incompformsRouter);
router.use('/editform', editformRouter);
router.use('/admin', adminRouter);
router.use('/adminCompleted', adminCompletedRouter);
router.use('/adminInCompleted', adminInCompletedRouter);
router.use('/adminViewForm', adminViewFormRouter);
router.use('/sign-in', signInRouter);
router.use('/sign-up', signUpRouter);

// Home page router
router.get('/home', homeController.getHomePage);

// Catch-all route για μη έγκυρες διαδρομές
router.get('*', function (req, res) {
    res.send('Sorry, this is an invalid URL.');
});

module.exports = router;
