const express = require('express');
const router = express.Router();
let db = require('../model/sqlite/model.js');

exports.getAllInCompletedForms = function (req, res, next) {
    db.getAllInCompletedForms( function (err, incompleted_forms) {
        if (err) {
            console.log(err);
            res.status(500).send(err);
        } else {
            res.locals.numOfInCompForms = incompleted_forms.length;
            next();
            
        }
    });
};


exports.getAllCompletedForms = function (req, res, next) {
    db.getAllCompletedForms( function (err, completed_forms) {
        if (err) {
            console.log(err);
            res.status(500).send(err);
        } else {
            res.locals.numOfCompForms = completed_forms.length;
            next();
        }
    });
};

exports.getAllInSufficientForms = function (req, res, next) {
    db.getAllInSufficientForms( function (err, insufficient_forms) {
        if (err) {
            console.log(err);
            res.status(500).send(err);
        } else {
            res.locals.numOfInSuffForms = insufficient_forms.length;
            res.render('admin', {
                style: "admin.css",
                title: "Admin",
                script: "admin.js",
                admin_id: req.session.loggedUserId,
                accountType: req.session.accountType,
                message: req.flash('message') // Προβολή του μηνύματος
            })
        }
    });
};
