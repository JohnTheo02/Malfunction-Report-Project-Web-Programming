const express = require('express');
const router = express.Router();
let db = require('../model/sqlite/model.js');


exports.goToAdminCompletedForms = (req, res) => {
    //const userIsSignedIn = true; 
    res.render('adminCompleted', {
        style: "adminCompleted.css",
        title: "AdminCompleted",
        script: "adminCompleted.js",
        admin_id: req.session.loggedUserId
    })
};

exports.getAllCompletedForms = function (req, res, next) {
    db.getAllCompletedForms(function (err, completed_forms) {
        if (err) {
            console.log(err);
            res.status(500).send(err);
        } else {
            res.render('adminCompleted', {
                style: "adminCompleted.css",
                title: "AdminCompleted",
                script: "adminCompleted.js",
                admin_id: req.session.loggedUserId,
                completed_forms: completed_forms,
            });
            console.log(completed_forms)
        }
    });
};

exports.changeFormToInComplete = function (req, res) {
    db.changeFormToInComplete(req.params.id,function (err, result) {
        if (err) {
            console.log(err);
            res.status(500).send(err);
        } else {
            res.redirect('/admin');
        }
    });
};
