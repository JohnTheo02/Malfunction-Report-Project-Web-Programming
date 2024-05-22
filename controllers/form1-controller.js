let db = require('../model/sqlite/model.js');

exports.goToForm = (req, res) => {
    res.render('form1', {
        style: "form1.css",
        title: "form",
        script: "form1.js",
        user_id: req.session.loggedUserId
    });
    //console.log("form");
};

exports.submitEvent = function (req, res, next) {
    let date = new Date();
    let dateString = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();


    let form = {
        id: req.params.id,
        damaged_building: req.body.damaged_building,
        class_name: req.body.class_name,
        damage_type: req.body.damage_type,
        severity: req.body.severity,
        damage_info: req.body.damage_info,
        file_path: req.body.file_path,
        status: "1",
        status_changed: "null",
        additional_info: req.body.additional_info,
        user_id: req.session.loggedUserId,
        location: 'Δεν καταχωρήθηκε τοποθεσία από τον χρήστη',
        date: dateString
    };

    db.submitEvent(form, function (err, result) {
        if (err) {
            console.log(err);
            res.status(500).send(err);
        } else {
            req.flash('success', 'Η βλάβη καταχωρήθηκε με επιτυχία');
            res.redirect('/');
        }
    });
}


exports.getBuildings = function (req, res, next) {
    db.getBuildings(function (err, buildings) {
        if (err) {
            console.log(err);
            res.status(500).send(err);
        }
        else {
            let building = [];
            for (let i = 0; i < buildings.length; i++) {
                if (buildings[i]) {
                    building.push(buildings[i]);
                }
            }
            //console.log(building)
            res.locals.buildings = building;
            next();
        }

    });

}

exports.getClassName = function (req, res, next) {
    db.getClassName(function (err, classes) {
        if (err) {
            console.log(err);
            res.status(500).send(err);
        }
        else {
            let class_ = [];
            for (let i = 0; i < classes.length; i++) {
                if (classes[i]) {
                    class_.push(classes[i]);
                }
            }
            //console.log(class_)
            res.locals.classes = class_;
            next();
        }

    });

}

exports.getDamageType = function (req, res, next) {
    db.getDamageType(function (err, types) {
        if (err) {
            console.log(err);
            res.status(500).send(err);
        }
        else {
            let type = [];
            for (let i = 0; i < types.length; i++) {
                if (types[i]) {
                    type.push(types[i]);
                }
            }
            //console.log(type)
            res.locals.types = type;
            next();
        }

    });

}

exports.getSeverity = function (req, res, next) {
    db.getSeverity(function (err, severities) {
        if (err) {
            console.log(err);
            res.status(500).send(err);
        }
        else {
            let severity = [];
            for (let i = 0; i < severities.length; i++) {
                if (severities[i]) {
                    severity.push(severities[i]);
                }
            }
            //console.log(severity)
            res.locals.severities = severity;
            next();

        }


    });

}
