
let db = require('../model/sqlite/model.js');


exports.goToAdminCompletedForms = (req, res) => {
    //const userIsSignedIn = true; 
    res.render('adminCompleted', { //render hbs
        style: "adminCompleted.css", //from css
        title: "AdminCompleted", //title
        script: "adminCompleted.js", //from src
        admin_id: req.session.loggedUserId,
        accountType: req.session.accountType
    })
};

//Get all completed forms
exports.getAllCompletedForms = function (req, res, next) {
    db.getAllCompletedForms(function (err, completed_forms) { //calling from model to select from damage_reports
        if (err) {
            console.log(err);
            res.status(500).send(err);
        } else {
            res.render('adminCompleted', {
                style: "adminCompleted.css",
                title: "AdminCompleted",
                script: "adminCompleted.js",
                admin_id: req.session.loggedUserId,
                completed_forms: completed_forms, // all the completed forms
                accountType: req.session.accountType
            });
            //console.log(completed_forms)
        }
    });
};

//changing form status to 1 from 0 (only first 20mins)
exports.changeFormToInComplete = function (req, res) {
    db.changeFormToInComplete(req.params.id,function (err, result) {
        if (err) {
            console.log(err);
            res.status(500).send(err);
        } else {
            req.flash('message', 'Επιτυχής αλλαγή της δήλωσης σε μη ολοκληρωμένη'); // flash message when admin page is redirected
            res.redirect('/admin');
        }
    });
};
