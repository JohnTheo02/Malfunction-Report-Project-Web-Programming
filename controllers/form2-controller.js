let db = require('../model/sqlite/model.js');

exports.goToForm2 = (req, res) => {
    res.render('form2', {
        style: "form2.css",
        title: "form",
        script: "form2.js",
        user_id: req.session.loggedUserId
    });
    //console.log("form");
};

exports.submitEvent = function (req, res, next) {
    let date = new Date();
    let dateString = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    
    db.getLocationById(req.session.loggedUserId, function (err, location) {
        if (err) {
            console.log(err);
            res.status(500).send(err);
        } else {
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
                location: location && location[0] ? location[0].location : 'Δεν καταχωρήθηκε τοποθεσία από τον χρήστη',
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
    });
};
exports.getAllClassNames = function (req, res, next) {
    db.getAllClassNames(function (err, classes) {
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

exports.getLocationById = function (req, res,next) {
    db.getLocationById(req.session.loggedUserId,function (err, location) {
        if (err) {
            console.log(err);
            res.status(500).send(err);
        }
        else {
            //console.log(severity)
            res.locals.location = location;
            next();
        
        }
        

    });
   
}

exports.getLocationById = function (req, res,next) {
    db.getLocationById(req.session.loggedUserId,function (err, location) {
        if (err) {
            console.log(err);
            res.status(500).send(err);
        }
        else {
            //console.log(severity)
            res.locals.location = location;
            next();
        
        }
        

    });
   
}


