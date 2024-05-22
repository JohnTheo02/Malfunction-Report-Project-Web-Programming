const express = require('express');
const router = express.Router();

exports.goToAdminPage = (req, res) => {
    //const userIsSignedIn = true; 
    res.render('admin', {
        style: "admin.css",
        title: "Admin",
        script: "admin.js",
        admin_id: req.session.loggedUserId
    })
};

