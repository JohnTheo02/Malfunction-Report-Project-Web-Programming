let db = require('../model/sqlite/model.js');

exports.goToForm3 = (req, res) => {
    res.render('form3', {
        style: "form3.css",
        title: "form",
        script: "form3.js",
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