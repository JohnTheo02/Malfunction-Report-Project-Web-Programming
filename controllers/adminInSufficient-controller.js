
let db = require('../model/sqlite/model.js');


exports.getAllInSufficientForms = function (req, res, next) {
    db.getAllInSufficientForms(function (err, insufficient_forms) {
        if (err) {
            console.log(err);
            res.status(500).send(err);
        } else {
            res.render('adminInSufficient', {
                style: "adminInSufficient.css",
                title: "Admin InSufficient Form",
                script: "adminInSufficient.js",
                admin_id: req.session.loggedUserId,
                insufficient_forms: insufficient_forms,
                accountType: req.session.accountType
            });
            //console.log(completed_forms)
        }
    });
};
