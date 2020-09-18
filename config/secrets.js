const {mongoURI, secretOrKey, googleMapKey, TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, TWILIO_PHONE_NUMBER} = process.env;

if (mongoURI) {
    module.exports = {mongoURI, secretOrKey, googleMapKey, TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, TWILIO_PHONE_NUMBER}
} else {
    module.exports = require('./keys.js')
}


