
//render about Page
exports.getAboutPage = (req, res) => {
    //const userIsSignedIn = true; 
    res.render('about', { //rendering hbs
        style: "about.css", //style from css
        title: "About us", //title
        script: "about.js" //script from src
    })
};

