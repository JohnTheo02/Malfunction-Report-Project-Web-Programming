const express = require('express');
const router = express.Router();

exports.getAboutPage = (req, res) => {
    //const userIsSignedIn = true; 
    res.render('about', {
        style: "about.css",
        title: "About us",
        script: "about.js"
    })
};

