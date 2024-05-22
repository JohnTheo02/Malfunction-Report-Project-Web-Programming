const express = require('express');
const router = express.Router();
let db = require('../model/sqlite/model.js');


exports.goToAdminViewForm = (req, res) => {
    //const userIsSignedIn = true; 
    res.render('adminViewForm', {
        style: "adminViewForm.css",
        title: "AdminViewForm",
        script: "adminViewForm.js",
        admin_id: req.session.loggedUserId
    })
};

exports.getFormById = function (req, res) {
    db.getFormById(req.params.id, function (err, form) {
        if (err) {
            req.flash('error', 'Σφάλμα κατά την ανάκτηση της φόρμας');
            return res.redirect('/');
        }
        //console.log(form)
        res.render('adminViewForm', {
            style: "adminViewForm.css",
            title: "AdminViewForm",
            admin_id: req.session.loggedUserId,
            accountType: req.session.loggedUserType,
            form: form,
            id: req.params.id
        });
    });
}

exports.getUsernameById = function (req, res, next) {
    db.getFormById(req.params.id, function (err, form) {
        if (err) {
            console.log(err);
            res.status(500).send(err);
        } else if (!form) {
            res.status(404).send("Form not found");
        } else if (!form.user_id) {
            res.status(400).send("user_id not found in form");
        } else {
            db.getUsernameById(form.user_id, function (err, username) {
                if (err) {
                    console.log(err);
                    res.status(500).send(err);
                } else {
                    res.locals.user_name = username;
                    next();
                }
            });
        }
    });
}

exports.changeFormToCompleted = function (req, res) {
    db.changeFormToCompleted(req.params.id, function (err, result) {
        if (err) {
            console.log(err);
            res.status(500).send(err);
        } else {
            res.redirect('/admin');
        }
    });
};


exports.deleteForm = function (req, res) {
    // console.log(req.params.id);
    db.deleteForm(req.params.id, function (err, result) {
        if (err) {
            console.log(err);
            res.status(500).send(err);
        }
        else {
            res.redirect('/admin');
        }
    });
}