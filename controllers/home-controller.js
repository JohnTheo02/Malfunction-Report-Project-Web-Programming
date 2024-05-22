const express = require('express');
const router = express.Router();

exports.getHomePage = (req, res) => {
    //const userIsSignedIn = true; 
    res.render('home', {
        style: "home.css",
        title: "Home",
        script: "home.js",
        signedIn: req.session.loggedUserId,
        notSignedIn:!req.session.loggedUserId,
        user_id: req.session.loggedUserId
    })
};

