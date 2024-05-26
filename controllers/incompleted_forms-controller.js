
let db = require('../model/sqlite/model.js');


exports.goToInCompletedForms = (req, res) => {
    //const userIsSignedIn = true; 
    res.render('incompleted_forms', {
        style: "incompleted_forms.css",
        title: "Incompleted_forms",
        script: "incompleted_forms.js",
        user_id: req.session.loggedUserId,
        accountType: req.session.accountType
    })
};

//get incompleted forms by user ID
exports.getInCompletedFormsById = function (req, res, next) {
    db.getInCompletedFormsById(req.session.loggedUserId, function (err, incompleted_forms) {
        if (err) {
            console.log(err);
            res.status(500).send(err);
        } else {
            
            req.incompleted_forms = incompleted_forms; //saving each incompleted form in locals
            res.render('incompleted_forms', { //rendering hbs
                style: "incompleted_forms.css",
                title: "Incompleted_forms",
                script: "incompleted_forms.js",
                user_id: req.session.loggedUserId,
                incompleted_forms:req.incompleted_forms,
                accountType: req.session.accountType
            })
        }
    });
};
