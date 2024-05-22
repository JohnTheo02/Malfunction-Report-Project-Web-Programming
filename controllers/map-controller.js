const express = require('express');
const router = express.Router();
let db = require('../model/sqlite/model.js');

exports.getMap = (req, res) => {
    res.render('map', {
        style: "map.css",
        title: "map",
        script: "map.js",
        user_id: req.session.loggedUserId
    })
};

exports.tempLocation = function (req, res) {
    
    let tmpLoc = req.body.textInput;
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
