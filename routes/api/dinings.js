const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");

const Dining = require("../../models/Dining");
const validateDiningInput = require("../../validation/valid-event");

router.get("/", (req, res) => {
  Dining.find()
    .then((dinings) => res.json(dinings))
    .catch((err) => res.status(404).json({ nodiningsfound: "No Dinings found" }));
});

router.get("/:id", (req, res) => {
  Dining.findById(req.params.id)
    .then((dining) => res.json(dining))
    .catch((err) => res.status(404).json({ noDiningfound: "No Dining found" }));
});

router.post(
  "/new",
  // passport.authenticate('jwt', {session: false}),
  (req, res) => {
    const { errors, isValid } = validateDiningInput(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }

    const newDining = new Dining({
      title: req.body.title,
      description: req.body.description,
      lat: req.body.lat,
      lng: req.body.lng,
      range: req.body.range,
    });

    newDining.save().then((dining) => res.json(dining));
  }
);

module.exports = router;
