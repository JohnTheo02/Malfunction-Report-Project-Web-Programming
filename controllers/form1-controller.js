let db = require('../model/sqlite/model.js');
const moment = require('moment-timezone');

exports.goToForm = (req, res) => {
    res.render('form1', { //render hbs
        style: "form1.css",
        title: "form",
        script: "form1.js",
        user_id: req.session.loggedUserId,
        accountType: req.session.accountType
    });
};

exports.submitEvent = function (req, res, next) {
    
    let date = new Date();
    // Converting current Time to Athens Timezone
    let athensTime = moment(date).tz("Europe/Athens");
    // Making the time string
    let dateString = athensTime.format('YYYY-MM-DD HH:mm:ss');

    // Checking if req.file exists
    if (!req.file) {
        console.error("File not found in request");
        res.status(400).send("File not found in request");
        return;
    }

    let form = {
        id: req.params.id, //take id from params
        damaged_building: req.body.damaged_building,
        class_name: req.body.class_name,
        damage_type: req.body.damage_type,
        severity: req.body.severity || "Δεν γνωρίζω",
        damage_info: req.body.damage_info,
        file_path: req.file.buffer, // BLOB
        status: "1",
        status_changed: "null",
        additional_info: req.body.additional_info,
        user_id: req.session.loggedUserId,
        location: 'Δεν καταχωρήθηκαν συντεταγμένες από τον χρήστη',
        admin_comments: "",
        date: dateString
    };

    db.submitEvent(form, function (err, result) { //calling the model function with values from form
        if (err) {
            console.log(err);
            res.status(500).send(err);
        } else {

            req.flash('message', 'Η βλάβη καταχωρήθηκε με επιτυχία');
            res.redirect('/');
            
        }
    });
};

// DataList of buildings based on what department user has selected
exports.getBuildings = function (req, res, next) {
    db.getBuildings(function (err, buildings) {
        if (err) {
            console.log(err);
            res.status(500).send(err);
        } else {
            let building = [];
            for (let i = 0; i < buildings.length; i++) {
                if (buildings[i]) {
                    building.push(buildings[i]);
                }
            }
            res.locals.buildings = building;
            next();
        }
    });
};

// DataList of classnames based on what department user has selected
exports.getClassName = function (req, res, next) {
    db.getClassName(function (err, classes) {
        if (err) {
            console.log(err);
            res.status(500).send(err);
        } else {
            let class_ = [];
            for (let i = 0; i < classes.length; i++) {
                if (classes[i]) {
                    class_.push(classes[i]);
                }
            }
            res.locals.classes = class_;
            next();
        }
    });
};

// DataList of DamageTypes based on what department user has selected
exports.getDamageType = function (req, res, next) {
    db.getDamageType(function (err, types) {
        if (err) {
            console.log(err);
            res.status(500).send(err);
        } else {
            let type = [];
            for (let i = 0; i < types.length; i++) {
                if (types[i]) {
                    type.push(types[i]);
                }
            }
            res.locals.types = type;
            next();
        }
    });
};

// DataList of selerity based on what department user has selected
exports.getSeverity = function (req, res, next) {
    db.getSeverity(function (err, severities) {
        if (err) {
            console.log(err);
            res.status(500).send(err);
        } else {
            let severity = [];
            for (let i = 0; i < severities.length; i++) {
                if (severities[i]) {
                    severity.push(severities[i]);
                }
            }
            res.locals.severities = severity;
            next();
        }
    });
};
