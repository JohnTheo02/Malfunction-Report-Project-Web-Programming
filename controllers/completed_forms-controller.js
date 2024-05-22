const express = require('express');
const router = express.Router();
let db = require('../model/sqlite/model.js');


exports.goToCompletedForms = (req, res) => {
    //const userIsSignedIn = true; 
    res.render('completed_forms', {
        style: "completed_forms.css",
        title: "Completed_forms",
        script: "completed_forms.js",
        user_id: req.session.loggedUserId
    })
};

exports.getCompletedFormsById = function (req, res, next) {
    db.getCompletedFormsById(req.session.loggedUserId, function (err, completed_forms) {
        if (err) {
            console.log(err);
            res.status(500).send(err);
        } else {
            req.completed_forms = completed_forms; // Attach the forms to the request object
            res.render('completed_forms', {
                style: "completed_forms.css",
                title: "Completed_forms",
                script: "completed_forms.js",
                user_id: req.session.loggedUserId,
                completed_forms:req.completed_forms
            })
        }
    });
};
    
