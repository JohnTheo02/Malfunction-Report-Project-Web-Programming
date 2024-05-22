const express = require('express');
const router = express.Router();
let db = require('../model/sqlite/model.js');

exports.getFormById = function (req, res) {
    db.getFormById(req.params.id, function (err, form) {
        if (err) {
            req.flash('error', 'Σφάλμα κατά την ανάκτηση της φόρμας');
            return res.redirect('/');
        }
        res.render('editform', {
            style: "editform.css",
            title: "Update Event",
            userId: req.session.loggedUserId,
            accountType: req.session.loggedUserType,
            form: form,
            id: req.params.id
        });
    });
}

exports.updateForm = function (req, res) {
    let form = {
        id: req.params.id,
        damaged_building: req.body.damaged_building,
        class_name: req.body.class_name,
        damage_type: req.body.damage_type,
        severity: req.body.severity,
        damage_info: req.body.damage_info,
        file_path: req.body.file_path,
        additional_info: req.body.additional_info,
        user_id: req.session.loggedUserId
    };
    //console.log(form);
    db.updateForm(form, function (err, result) {
        if (err) {
            req.flash('error', 'Σφάλμα κατά την ενημέρωση της φόρμας');
            return res.redirect(`/editform/edit/${req.params.id}`);
        }
        req.flash('success', 'Η φόρμα ενημερώθηκε με επιτυχία');
        res.redirect('/');
    });
}

exports.deleteForm = function (req, res) {
    // console.log(req.params.id);
    db.deleteForm(req.params.id, function (err, result) {
        if (err) {
            console.log(err);
            res.status(500).send(err);
        }
        else {
            res.redirect('/incompleted_forms');
        }
    });
}

