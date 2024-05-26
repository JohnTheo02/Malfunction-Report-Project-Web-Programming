
let db = require('../model/sqlite/model.js');

exports.getupdateLocPage = (req, res) => {
    //const userIsSignedIn = true; 
    res.render('updateLoc', {
        style: "updateLoc.css",
        title: "updateLoc",
        script: "updateLoc.js",
        id: req.params.id,
        user_id: req.session.loggedUserId,
        accountType: req.session.accountType,
    })
};

exports.updateLocation = function (req, res, next) {
    let location = req.body.textInput;
    db.updateLoc(location, req.params.id, function (err, result) {
        if (err) {
            console.log(err);
            res.status(500).send(err);
        } else {
            res.locals.id = req.params.id;
            res.redirect(`/editform/${req.params.id}`);
        }
    });
};



exports.updateFormLoc = function (req, res) {
    let form = {
        id: req.params.id,
        damaged_building: req.body.damaged_building,
        class_name: req.body.class_name,
        damage_type: req.body.damage_type,
        severity: req.body.severity || "Δεν γνωρίζω",
        damage_info: req.body.damage_info,
        status: "1",
        additional_info: req.body.additional_info,
        location: req.body.location || 'Δεν καταχωρήθηκαν συντεταγμένες από τον χρήστη',
        admin_comments: "null",
        user_id: req.session.loggedUserId
    };
    //console.log(form);
    db.updateFormLoc(form, function (err, result) {
        if (err) {
            req.flash('error', 'Σφάλμα κατά την ενημέρωση της φόρμας');
            return res.redirect(`/editform/${req.params.id}`);
        }
        res.locals.id = req.params.id;
        res.redirect(`/updateLoc/${req.params.id}`);
    });
};
