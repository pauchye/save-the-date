const express = require("express");
const router = express.Router();
const TWILIO_ACCOUNT_SID = require('../../config/secrets').TWILIO_ACCOUNT_SID;
const TWILIO_AUTH_TOKEN = require('../../config/secrets').TWILIO_AUTH_TOKEN;
const TWILIO_PHONE_NUMBER = require('../../config/secrets').TWILIO_PHONE_NUMBER;

const client = require('twilio')(
    TWILIO_ACCOUNT_SID,
    TWILIO_AUTH_TOKEN
  );

router.post('/', (req, res) => {
    res.header('Content-Type', 'application/json');
    client.messages
      .create({
        from: TWILIO_PHONE_NUMBER,
        to: req.body.to,
        body: req.body.body
      })
      .then(() => {
        res.send(JSON.stringify({ success: true }));
      })
      .catch(err => {
        console.log(err);
        res.send(JSON.stringify({ success: false }));
      });
  });

module.exports = router;