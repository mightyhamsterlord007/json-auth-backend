const Validator = require('validator');
const isEmpty  = require('./isEmpty');

const validateLoginData = (data) => {

    let errors = {};
    
    data.email = !isEmpty(data.email) ? data.email : '';
    data.password = !isEmpty(data.password) ? data.password : '';

    if (!Validator.isEmail(data.email)) {
        errors.email = 'Check is your format!';
    }

    if (Validator.isEmpty(data.email)) {
        errors.email = 'Email is required!';
    }

    if (Validator.isEmpty(data.password)) {
        errors.password = 'Please enter a password';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
}

module.exports = validateLoginData;