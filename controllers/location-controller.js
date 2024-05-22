const express = require('express');
const router = express.Router();

exports.getLocationSelectionPage = (req, res) => {
    res.render('location', {
        style: "location.css",
        title: "location",
        user_id: req.session.loggedUserId
    })
};
