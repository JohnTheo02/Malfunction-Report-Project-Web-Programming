let db = require('../model/sqlite/model.js');

exports.goToForm3 = (req, res) => {
    res.render('form3', {
        style: "form3.css",
        title: "form",
        script: "form3.js",
        user_id: req.session.loggedUserId,
        accountType: req.session.accountType
    });
    //console.log("form");
};
exports.submitEvent = function (req, res, next) {
    let date = new Date();
    date.setHours(date.getHours() + 3); // Προσθήκη τριών ωρών
    let dateString = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

    // Check if req.file is defined
    if (!req.file) {
        console.error("File not found in request");
        res.status(400).send("File not found in request");
        return;
    }

    let form = {
        id: req.params.id,
        damaged_building: req.body.damaged_building,
        class_name: req.body.class_name,
        damage_type: req.body.damage_type,
        severity: req.body.severity,
        damage_info: req.body.damage_info,
        file_path: req.file.buffer, // Save the file as BLOB
        status: "1",
        status_changed: "null",
        additional_info: req.body.additional_info,
        user_id: req.session.loggedUserId,
        location: 'Δεν καταχωρήθηκαν συντεταγμένες από τον χρήστη',
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
            res.locals.buildings = building;
            next();
        }
    });
}

exports.getAllBuildings = function (req, res,next) {
    db.getAllBuildings(function (err, buildings) {
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