

exports.getHomePage = (req, res) => {
    //const userIsSignedIn = true; 
    res.render('home', { //render home Page
        style: "home.css",
        title: "Home",
        script: "home.js",
        signedIn: req.session.loggedUserId,
        notSignedIn:!req.session.loggedUserId,
        user_id: req.session.loggedUserId,
        accountType: req.session.accountType,
        message: req.flash('message') // Flashing messages when on home Page
    })
};

