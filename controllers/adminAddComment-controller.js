const express = require('express');
const router = express.Router();
let db = require('../model/sqlite/model.js');

exports.goToAdminAddComment = (req, res) => {
    //const userIsSignedIn = true; 
    res.render('adminAddComment', {
        style: "adminAddComment.css",
        title: "AdminAddComment",
        script: "adminAddComment.js",
        admin_id: req.session.loggedUserId,
        accountType: req.session.accountType
    })
};


exports.getFormById = function (req, res) {
    db.getFormById(req.params.id, function (err, form) {
        if (err) {
            req.flash('error', 'Σφάλμα κατά την ανάκτηση της φόρμας');
            return res.redirect('/');
        }

        // Convert the BLOB to a base64 string
        const file_path_base64 = form.file_path ? form.file_path.toString('base64') : null;
        const mimeType = 'image/png';

        res.render('adminAddComment', {
            style: "adminAddComment.css",
            title: "AdminAddComment",
            script: "adminAddComment.js",
            admin_id: req.session.loggedUserId,
            accountType: req.session.loggedUserType,
            form: form,
            id: req.params.id,
            file_path_base64: file_path_base64,
            mimeType: mimeType
        });
    });
}

exports.submitComment = function (req, res) {
    let form = {
        id: req.params.id,
        status: "2",
        admin_comments: req.body.admin_comments
    };
    //console.log(form)
    db.addComment(form, function (err, result) {
        if (err) {
            req.flash('error', 'Σφάλμα κατά την ενημέρωση της φόρμας');
            return res.redirect(`/`);
        }
        req.flash('message', 'Το σχόλιο του διαχειριστή αποθηκεύτηκε με επιτυχία');
        res.redirect('/admin');
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
