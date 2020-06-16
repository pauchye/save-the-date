const {mongoURI, secretOrKey, googleMapKey} = process.env;

if (mongoURI) {
    module.exports = {mongoURI, secretOrKey, googleMapKey}
} else {
    module.exports = require('./keys.js')
}


