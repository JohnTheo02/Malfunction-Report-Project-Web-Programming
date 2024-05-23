const express = require('express');
const router = express.Router();
let db = require('../model/sqlite/model.js');


exports.getInSufficientFormsById = function (req, res, next) {
    db.getInSufficientFormsById(req.session.loggedUserId, function (err, insufficient_forms) {
        if (err) {
            console.log(err);
            res.status(500).send(err);
        } else {
            
            req.insufficient_forms = insufficient_forms;
            res.render('insufficient_forms', {
                style: "insufficient_forms.css",
                title: "Insufficient forms",
                script: "insufficient_forms.js",
                user_id: req.session.loggedUserId,
                insufficient_forms:req.insufficient_forms,
                accountType: req.session.accountType
            })
        }
    });
};
