const express = require('express');
const router = express.Router();
let db = require('../model/sqlite/model.js');

exports.getSchoolPage = (req, res) => {
    res.render('school', {
        style: "school.css",
        title: "school",
        script: "school.js",
        user_id: req.session.loggedUserId
    })
};

exports.getSelectedDepartmentBuildings = function (req, res, next) {
    
    let selected = {
        selectedDepartment: req.body.selectedDepartment
    };

    //console.log(selected);

    db.getSelectedDepartmentBuildings(selected, function (err, result) {
        if (err) {
            console.log(err);
            res.status(500).send(err);
        } else {
            next();
        }
    });
    
};


exports.getSelectedDepartmentClasses = function (req, res, next) {

    let selected = {
        selectedDepartment: req.body.selectedDepartment
    };

    //console.log(selected);

    db.getSelectedDepartmentClasses(selected, function (err, result) {
        if (err) {
            console.log(err);
            res.status(500).send(err);
        } else {
            res.redirect('/form1');

        }
    });
};
