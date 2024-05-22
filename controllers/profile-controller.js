const express = require('express');
const router = express.Router();
let db = require('../model/sqlite/model.js');

exports.loadProfile = (req, res) => {
    res.render('profile', {
        style: "profile.css",
        title: "profile",
        script: "profile.js",
        user_id: req.session.loggedUserId
    })
};

exports.getUsernameById = function (req, res) {
    db.getUsernameById(req.session.loggedUserId,function (err, username) {
        //console.log(req.session.loggedUserId)
        //console.log(username)
        if (err) {
            console.log(err);
            res.status(500).send(err);
        }
        else {
            res.render('profile', {
                style: "profile.css",
                title: "Profile",
                script: "profile.js",
                user_id: req.session.loggedUserId,
                user_name: username
            })
        }
        
    });
    
}

exports.getAdminById = function (req, res) {
    db.getAdminById(req.session.loggedUserId,function (err, username) {
        //console.log(req.session.loggedUserId)
        //console.log(username)
        if (err) {
            console.log(err);
            res.status(500).send(err);
        }
        else {
            res.render('profile', {
                style: "profile.css",
                title: "Profile",
                script: "profile.js",
                user_id: req.session.loggedUserId,
                user_name: username
            })
        }
        
    });
    
}


