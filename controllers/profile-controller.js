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
 


exports.getInCompletedFormsById = function (req, res, next) {
    db.getInCompletedFormsById(req.session.loggedUserId, function (err, incompleted_forms) {
        if (err) {
            console.log(err);
            res.status(500).send(err);
        } else {
            res.locals.numOfInCompForms = incompleted_forms.length;
            next();
            
        }
    });
};


exports.getCompletedFormsById = function (req, res, next) {
    db.getCompletedFormsById(req.session.loggedUserId, function (err, completed_forms) {
        if (err) {
            console.log(err);
            res.status(500).send(err);
        } else {
            res.locals.numOfCompForms = completed_forms.length;
            next();
        }
    });
};

exports.getInSufficientFormsById = function (req, res, next) {
    db.getInSufficientFormsById(req.session.loggedUserId, function (err, insufficient_forms) {
        if (err) {
            console.log(err);
            res.status(500).send(err);
        } else {
            res.locals.numOfInSuffForms = insufficient_forms.length;
            next();
        }
    });
};
