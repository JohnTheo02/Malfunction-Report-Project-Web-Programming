const express = require('express');
const router = express.Router();
let db = require('../model/sqlite/model.js');


exports.goToAdminCompletedForms = (req, res) => {
    //const userIsSignedIn = true; 
    res.render('adminCompleted', {
        style: "adminCompleted.css",
        title: "AdminCompleted",
        script: "adminCompleted.js",
        admin_id: req.session.loggedUserId,
        accountType: req.session.accountType
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
                accountType: req.session.accountType
            });
            //console.log(completed_forms)
        }
    });
};

exports.changeFormToInComplete = function (req, res) {
    db.changeFormToInComplete(req.params.id,function (err, result) {
        if (err) {
            console.log(err);
            res.status(500).send(err);
        } else {
            req.flash('message', 'Επιτυχής αλλαγή της δήλωσης σε μη ολοκληρωμένη');
            res.redirect('/admin');
        }
    });
};
