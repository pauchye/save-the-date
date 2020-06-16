const {mongoURI, secretOrKey, googleMapKey} = process.env;

if (mongoURI) {
    console.log('secrets from env, we\'re in heroku!');
    module.exports = {mongoURI, secretOrKey, googleMapKey}
} else {
    console.log('secrets from local file, we\'re in local!');
    module.exports = require('./keys.js')
}


