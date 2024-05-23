const passport = require('passport');
const express = require('express');
const controller = require('../controllers/home');

const router = express.Router();

router.use((req, res, next) => {
    next();
});


router.get('/', async (req, res) => {
    // console.log(req.session)
    res.render('home', {
        layout: 'main',
        style: "home.css",
        title: "Home",
        script: "home.js"
    })
});





module.exports = router;