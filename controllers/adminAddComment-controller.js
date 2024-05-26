
let db = require('../model/sqlite/model.js');

//rendering Admin Add Comment Page
exports.goToAdminAddComment = (req, res) => {
    //const userIsSignedIn = true; 
    res.render('adminAddComment', { //render hbs
        style: "adminAddComment.css",
        title: "AdminAddComment",
        script: "adminAddComment.js",
        admin_id: req.session.loggedUserId,
        accountType: req.session.accountType
    })
};

//Getting form by its ID
exports.getFormById = function (req, res) {
    db.getFormById(req.params.id, function (err, form) {
        if (err) {
            req.flash('error', 'Σφάλμα κατά την ανάκτηση της φόρμας');
            return res.redirect('/');
        }
        const file_path_base64 = form.file_path ? form.file_path.toString('base64') : null; // Convert the BLOB to a base64 string
        const mimeType = 'image/png';

        res.render('adminAddComment', { //render hbs
            style: "adminAddComment.css", //style from css
            title: "AdminAddComment", //title
            script: "adminAddComment.js", //style from css
            admin_id: req.session.loggedUserId, //admin ID
            accountType: req.session.loggedUserType, 
            form: form, //form that we get from model function
            id: req.params.id, //form id
            file_path_base64: file_path_base64,
            mimeType: mimeType
        });
    });
}

// When admin submits the comment
exports.submitComment = function (req, res) {
    // the values that are updated are:
    let form = {
        id: req.params.id, // form id stays the same from params
        status: "2", // status is now 2: insufficient form
        admin_comments: req.body.admin_comments // adding admin comments from textarea with name=admin_comments
    };
    //console.log(form)
    db.addComment(form, function (err, result) {
        if (err) {
            req.flash('error', 'Σφάλμα κατά την ενημέρωση της φόρμας');
            return res.redirect(`/`);
        }
        req.flash('message', 'Το σχόλιο του διαχειριστή αποθηκεύτηκε με επιτυχία'); //flash message when you go to admin page
        res.redirect('/admin');
    });
}

// Get Username by ID
exports.getUsernameById = function (req, res, next) {
    //get the form by its id
    db.getFormById(req.params.id, function (err, form) {
        if (err) {
            console.log(err);
            res.status(500).send(err);
        } else if (!form) {
            res.status(404).send("Form not found");
        } else if (!form.user_id) {
            res.status(400).send("user_id not found in form");
        } else {
            //when we get the form, get its user_id, form.user_id
            db.getUsernameById(form.user_id, function (err, username) {
                if (err) {
                    console.log(err);
                    res.status(500).send(err);
                } else {
                    res.locals.user_name = username; //save username in locals
                    next();
                }
            });
        }
    });
}
