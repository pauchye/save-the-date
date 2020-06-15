const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

const Event = require("../../models/Event");
const validateEventInput = require("../../validation/valid-event")


router.get("/", (req, res) => {
    Event.find()
        .then(events => res.json(events))
        .catch(err => res.status(404).json({noeventsfound: "No events found"}))
})

router.get("/:id", (req, res) => {
    Event.findById(req.params.id)
      .then((event) => res.json(event))
      .catch((err) =>
        res.status(404).json({ noeventfound: "No event found" })
      );

})

router.post("/new", 
    // passport.authenticate('jwt', {session: false}), 
    (req, res) => {  

    const {errors, isValid} = validateEventInput(req.body);

    if(!isValid){
        return res.status(400).json(errors);
    }

    const newEvent = new Event({
      title: req.body.title,
      description: req.body.description,
      lat: req.body.lat,
      lng: req.body.lng,
      range: req.body.range,
    });

    newEvent.save().then((event) => res.json(event));

});

module.exports = router;
