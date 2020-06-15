const {mongoURI, secretOrKey} = process.env;

if (mongoURI) {
    console.log('secrets from env, we\'re in heroku!');
    module.exports = {mongoURI, secretOrKey}
} else {
    console.log('secrets from local file, we\'re in local!');
    module.exports = require('./keys.js')
}