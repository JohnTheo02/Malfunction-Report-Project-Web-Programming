
let db = require('../model/sqlite/model.js');
const moment = require('moment-timezone');

exports.getFormById = function (req, res) {
    db.getFormById(req.params.id, function (err, form) {
        if (err) {
            req.flash('error', 'Σφάλμα κατά την ανάκτηση της φόρμας');
            return res.redirect('/');
        }
        res.render('editform', {
            style: "editform.css",
            title: "Update Event",
            script: "editform.js",
            userId: req.session.loggedUserId,
            accountType: req.session.loggedUserType,
            form: form,
            id: req.params.id
        });
    });
}


//updating form
exports.updateForm = function (req, res) {
    let date = new Date();
    // Converting current Time to Athens Timezone
    let athensTime = moment(date).tz("Europe/Athens");
    // Making the time string
    let dateString = athensTime.format('YYYY-MM-DD HH:mm:ss');

    if (!req.file) {
        console.error("File not found in request");
        res.status(400).send("File not found in request");
        return;
    }
    let form = {
        id: req.params.id,
        damaged_building: req.body.damaged_building,
        class_name: req.body.class_name,
        damage_type: req.body.damage_type,
        severity: req.body.severity || "Δεν γνωρίζω",
        damage_info: req.body.damage_info,
        file_path: req.file.buffer || "null",
        status: "1", 
        additional_info: req.body.additional_info,
        location:req.body.location || 'Δεν καταχωρήθηκαν συντεταγμένες από τον χρήστη' ,
        admin_comments: "",
        date: dateString,
        user_id: req.session.loggedUserId
        
    };
    //console.log(form);
    db.updateForm(form, function (err, result) {
        if (err) {
            req.flash('error', 'Σφάλμα κατά την ενημέρωση της φόρμας');
            return res.redirect(`/editform/${req.params.id}`);
        }
        req.flash('message', 'Η δήλωση σας επεξεργάστηκε επιτυχώς');
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
            req.flash('message', 'Η δήλωση διαγράφηκε με επιτυχία');
            res.redirect('/profile');
        }
    });
}


