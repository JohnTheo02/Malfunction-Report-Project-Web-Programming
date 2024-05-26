
let db = require('../model/sqlite/model.js');

//Getting all incompleted forms
exports.getAllInCompletedForms = function (req, res, next) {
    db.getAllInCompletedForms( function (err, incompleted_forms) { //calling getAllInCompletedForms from model that is handling our database
        if (err) {
            console.log(err);
            res.status(500).send(err);
        } else {
            res.locals.numOfInCompForms = incompleted_forms.length; //save the number of all incompleted forms by all users to locals and we can call it from our hbs with {{numOfInCompForms}}
            next(); //go to the next action
            
        }
    });
};

//Getting all completed forms
exports.getAllCompletedForms = function (req, res, next) {
    db.getAllCompletedForms( function (err, completed_forms) {
        if (err) {
            console.log(err);
            res.status(500).send(err);
        } else {
            res.locals.numOfCompForms = completed_forms.length; //save the number of all completed forms by all users to locals and we can call it from our hbs with {{numOfCompForms}}
            next(); //go to the next action
        }
    });
};

exports.getAllInSufficientForms = function (req, res, next) {
    db.getAllInSufficientForms( function (err, insufficient_forms) {
        if (err) {
            console.log(err);
            res.status(500).send(err);
        } else {
            res.locals.numOfInSuffForms = insufficient_forms.length; //save the number of all insufficient forms by all users to locals and we can call it from our hbs with {{numOfInSuffForms}}
            res.render('admin', { //then render admin page
                style: "admin.css",
                title: "Admin",
                script: "admin.js",
                admin_id: req.session.loggedUserId, 
                accountType: req.session.accountType, //accountType:"admin"
                message: req.flash('message') // If any message is to show when admin page renders, show it
            })
        }
    });
};
