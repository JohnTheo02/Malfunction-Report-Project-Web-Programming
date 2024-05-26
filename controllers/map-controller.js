
let db = require('../model/sqlite/model.js');

exports.getMap = (req, res) => {
    res.render('map', {
        style: "map.css",
        title: "map",
        script: "map.js",
        user_id: req.session.loggedUserId,
        accountType: req.session.accountType
    })
};

exports.tempLocation = function (req, res) {
    
    let tmpLoc = req.body.textInput; //save the invinsible textInput with the location in a temporary loc
    //console.log(tmpLoc);
    //.log(req.session.loggedUserId);
    db.submitTempLoc(tmpLoc, req.session.loggedUserId, function (err, result) {
        if (err) {
            console.log(err);
            res.status(500).send(err);
        }else {
            req.flash('success', 'Η τοποθεσία καταχωρήθηκε με επιτυχία');
            res.redirect('/form2');
           
        }
    })
}
