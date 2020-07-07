const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

const Event = require("../../models/Event");
const validateEventInput = require("../../validation/valid-event")


router.get("/", (req, res) => {
    Event.find()
        .then(events => res.json(events))
})

router.get("/:id", (req, res) => {
    Event.findById(req.params.id)
      .then((event) => res.json(event))
})

router.post("/new", 
    (req, res) => {  

    const newEvent = new Event({
      title: req.body.title,
      description: req.body.description,
      lat: req.body.lat,
      lng: req.body.lng,
      range: req.body.range,
      price: req.body.price
    });

    newEvent.save().then((event) => res.json(event));
});

router.patch("/:id", (req, res) => {
  Event.findById(req.params.id)
    .update({
      price: req.body.price
    })
    .then((result) => {
      res.json(result);
    });
});

module.exports = router;
