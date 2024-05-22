const express = require('express');
const router = express.Router();
let db = require('../model/sqlite/model.js');


exports.goToAdminInCompletedForms = (req, res) => {
    //const userIsSignedIn = true; 
    res.render('adminInCompleted', {
        style: "adminInCompleted.css",
        title: "AdminInCompleted",
        script: "adminInCompleted.js",
        admin_id: req.session.loggedUserId
    })
};

exports.getAllInCompletedForms = function (req, res, next) {
    db.getAllInCompletedForms(function (err, incompleted_forms) {
        if (err) {
            console.log(err);
            res.status(500).send(err);
        } else {
            req.incompleted_forms = incompleted_forms; // Attach the forms to the request object
            res.render('adminInCompleted', {
                style: "adminInCompleted.css",
                title: "adminInCompleted",
                script: "adminInCompleted.js",
                admin_id: req.session.loggedUserId,
                incompleted_forms:req.incompleted_forms
            })
        }
    });
};
    
