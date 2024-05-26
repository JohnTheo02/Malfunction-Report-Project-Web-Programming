let db = require('../model/sqlite/model.js');
const moment = require('moment-timezone');

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
    // Μετατροπή της ώρας σε ώρα Αθηνών
    let athensTime = moment(date).tz("Europe/Athens");
    // Making the time string
    let dateString = athensTime.format('YYYY-MM-DD HH:mm:ss');


    if (!req.file) {
        console.error("File not found in request");
        res.status(400).send("File not found in request");
        return;
    }
    db.getLocationById(req.session.loggedUserId, function (err, location) {
        if (err) {
            console.log(err);
            res.status(500).send(err);
        } else {
            
            let form = {
                id: req.params.id,
                damaged_building: "Δηλώθηκαν συντεταγμένες της βλάβης",
                class_name: req.body.class_name,
                damage_type: req.body.damage_type,
                severity: req.body.severity || "Δεν γνωρίζω",
                damage_info: req.body.damage_info,
                file_path: req.file.buffer,// BLOB
                status: "1",
                additional_info: req.body.additional_info,
                user_id: req.session.loggedUserId,
                location: location && location[0] ? location[0].location : 'Δεν καταχωρήθηκαν συντεταγμένες από τον χρήστη',
                admin_comments: "",
                date: dateString
            };
        
            db.submitEvent(form, function (err, result) {
                if (err) {
                    console.log(err);
                    res.status(500).send(err);
                } else {
                
                    req.flash('message', 'Η βλάβη καταχωρήθηκε με επιτυχία');
                    res.redirect('/');
                    
                }
            });
        }
    });
};


// DataList of all class names
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

// get location from temp_location based on user_id
// Temp_location is used to save the location that user has selected until he sumbits the form
// By using this we solve the issue of user going back and selecting other location from the map
exports.getLocationById = function (req, res,next) {
    db.getLocationById(req.session.loggedUserId,function (err, location) {
        if (err) {
            console.log(err);
            res.status(500).send(err);
        }
        else {
            //console.log(severity)
            res.locals.location = location; //save it 
            next();
        
        }
        

    });
   
}