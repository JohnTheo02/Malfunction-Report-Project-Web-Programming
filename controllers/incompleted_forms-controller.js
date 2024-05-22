const express = require('express');
const router = express.Router();
let db = require('../model/sqlite/model.js');


exports.goToInCompletedForms = (req, res) => {
    //const userIsSignedIn = true; 
    res.render('incompleted_forms', {
        style: "incompleted_forms.css",
        title: "Incompleted_forms",
        script: "incompleted_forms.js",
        user_id: req.session.loggedUserId
    })
};

exports.getInCompletedFormsById = function (req, res, next) {
    db.getInCompletedFormsById(req.session.loggedUserId, function (err, incompleted_forms) {
        if (err) {
            console.log(err);
            res.status(500).send(err);
        } else {
            req.incompleted_forms = incompleted_forms; // Attach the forms to the request object
            res.render('incompleted_forms', {
                style: "incompleted_forms.css",
                title: "Incompleted_forms",
                script: "incompleted_forms.js",
                user_id: req.session.loggedUserId,
                incompleted_forms:req.incompleted_forms
            })
        }
    });
};
