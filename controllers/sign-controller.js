const bcrypt = require('bcrypt');
const dotenv = require('dotenv');
let db = require(`../model/sqlite/model.js`);
if (process.env.NODE_ENV !== 'production') {
    dotenv.config();
}

exports.goToAuthenticationPage = (req, res) => {
    res.render('sign-in', {
        style: "sign.css",
        title: "Sign-in",
        script: "sign-in.js",
        user_id: req.session.loggedUserId
    })
};
exports.goToRegistrationPage = (req, res) => {
    res.render('sign-up', {
        style: "sign.css",
        title: "Sign up",
        script: "sign-up.js",
        user_id: req.session.loggedUserId
    })
};

exports.signUp = function (req, res) {
    db.signUp(req.body.username, req.body.password, req.body.email, (err, result) => {
        if (err) {
            console.error('Failed to register: ' + err);
            res.redirect('/');
        }
        else if (result.message) {
            res.render('sign-up', { 
                style: "sign.css", 
                title: "sign-up", 
                script: "sign-up.js", 
                registerError: { message: result.message } });
        }
        else {
            console.log('registration successful');
            res.redirect('/');
        }
    })
}

exports.signIn = function (req, res) {
    //console.log(req.body);
    db.signIn(req.body.email, (err, result) => {
        if (err) {
            console.error('login error: ' + err);
            res.redirect('/login');
        }
        else if (result.id == null) {
            // console.log(result)
            res.render('sign-in', {
                style: "sign.css",
                title: "sign-in",
                script: "sign-in.js",
                loginError: { message: "Δεν υπάρχει λογαριασμός με αυτό το email" }
            });
        }
        else if (result.accountType == "admin") {
            const match = bcrypt.compareSync(req.body.password, result.password);
            if (match) {
                req.session.loggedUserId = result.id;
                req.session.loggedUserType = result.accountType;
                //req.flash('error', "");
                req.flash('success', "");
                res.redirect('/admin');
                /* res.render('home', {
                    layout: 'main',
                    style: "home.css", title: "Home",
                    script: "home.js",
                    userId: req.session.loggedUserId,
                    accountType: req.session.loggedUserType
                 }) */
            }
            else if (result.accountType == "user"){
                res.render('sign-in', {
                    layout: 'main',
                    style: "sign.css", 
                    title: "sign-in",
                    script: "sign-in.js",
                    loginError: { message: "Λάθος password" }
                });
            }
        }
        else {
            // console.log(req.body);
            // console.log(result)
            const match = bcrypt.compareSync(req.body.password, result.password);
            if (match) {
                
                req.session.loggedUserId = result.id;
                //req.session.loggedUserType = result.accountType;
                req.flash('error', "");
                req.flash('success', "");
                // console.log(req.session);
                res.redirect('/');
                /* res.render('home', {
                    style: "home.css", 
                    title: "Home",
                    script: "home.js",
                    signedIn: req.session.loggedUserId,
                    notSignedIn:!req.session.loggedUserId,
                    user_id: req.session.loggedUserId
                 }) */
            }
            else {
                res.render('sign-in', {
                    style: "sign-in.css", 
                    title: "sign-in",
                    script: "sign-in.js",
                    loginError: { message: "Λάθος password" }
                });
            }
        }
    })
}


//Τη χρησιμοποιούμε για να ανακατευθύνουμε στη σελίδα /login όλα τα αιτήματα από μη συνδεδεμένους χρήστες
exports.checkAuthenticated = function (req, res, next) {
    //Αν η μεταβλητή συνεδρίας έχει τεθεί, τότε ο χρήστης είναι συνεδεμένος
    if (req.session.loggedUserId) {
        // console.log("user is authenticated", req.originalUrl);
        //Καλεί τον επόμενο χειριστή (handler) του αιτήματος
        next();
    }
    else {
        //Ο χρήστης δεν έχει ταυτοποιηθεί, αν απλά ζητάει το /login ή το register δίνουμε τον
        //έλεγχο στο επόμενο middleware που έχει οριστεί στον router
        if ((req.originalUrl === "/sign-in") || (req.originalUrl === "/sign-up")) {
            next()
        }
        else {
            //Στείλε το χρήστη στη "/login" 
            // console.log("not authenticated, redirecting to /login")
            errorMessage = { message: "Πρέπει να συνδεθείτε" };
            res.render('sign-in', {
                style: "sign.css", 
                title: "sign-in", 
                script: "sign-in.js", 
                loginError: errorMessage });
        }
    }
}

exports.checkUser = function (req, res, next) {
    if (req.session.loggedUserType === "user") {
        next();
    }
    else {
        errorMessage = { message: "Πρέπει να είστε απλός χρήστης για να κάνετε κράτηση" };
        res.render('sign-in', {
            style: "sign.css", 
            title: "sign-in",
            script: "sign-in.js",
            loginError: errorMessage });
    }
}

exports.checkAdmin = function (req, res, next) {
    // console.log(req.session)
    if (req.session.loggedUserType === 'admin') {
        next();
    }
    else {
        // console.log("not admin, redirecting to /login");
        errorMessage = { message: "Πρέπει να είστε διαχειριστής" };
        // res.location('/login');
        res.redirect('/sign-in').render('sign-in', {
            style: "sign.css",
            title: "sign-in",
            script: "sign-in.js",
            loginError: errorMessage,
            userId: req.session.loggedUserId,
            accountType: req.session.loggedUserType
        });
        // res.render('login', { layout: 'main', style: "login.css", title: "Login", script: "login.js", loginError: errorMessage });
    }
}

exports.signOut = (req, res) => {
    //Σημειώνουμε πως ο χρήστης δεν είναι πια συνδεδεμένος
    req.session.destroy();
    res.redirect('/');
}
