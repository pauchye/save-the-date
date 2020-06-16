const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateEventInput(data){
    let errors = {};

    data.title = validText(data.title) ? data.title : '';
    data.description = validText(data.description) ? data.description : "";
    data.latitude = validText(data.lat) ? data.lat : "";
    data.longitude = validText(data.lng) ? data.lng : "";
    data.range = validText(data.range) ? data.range : "";

    if (Validator.isEmpty(data.title)){
        errors.text = 'Text field is required';
    }
    if (Validator.isEmpty(data.description)) {
      errors.text = "description field is required";
    }
    if (Validator.isEmpty(data.lat)) {
      errors.text = "latitude field is required";
    }
    if (Validator.isEmpty(data.lng)) {
      errors.text = "longitude field is required";
    }
    if (Validator.isEmpty(data.range)) {
      errors.text = "range field is required";
    }

    
    return{
        errors,
        isValid: Object.keys(errors).length === 0
    };
}