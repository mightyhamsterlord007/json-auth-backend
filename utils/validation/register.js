const Validator = require('validator');
const isEmpty  = require('./isEmpty');

const validateRegisterData = (data) => {

    let errors = {};

    data.username = !isEmpty(data.username) ? data.username : '';
    data.email = !isEmpty(data.email) ? data.email : '';
    data.password = !isEmpty(data.password) ? data.password : '';
    data.confirmPassword = !isEmpty(data.confirmPassword) ? data.confirmPassword : '';

    if (!Validator.isLength(data.username, {min: 3, max: 15 })) {
        errors.username = 'username must be longer than 3 characters and less than 15 characters';
    }

    if (Validator.isEmpty(data.username)) {
        errors.username = 'username field is needed';
    }

    if (Validator.isEmpty(data.email)) {
        errors.email = 'email field is needed';
    }

    if (!Validator.isEmail(data.email)) {
        errors.email = 'check your email format';
    }

    if (Validator.isEmpty(data.password)) {
        errors.password = 'password field is needed';
    }

    if (!Validator.isLength(data.password, {min: 6, max: 30 })) {
        errors.password = 'Password must be at least 6 characters long';
    }

    if (Validator.isEmpty(data.confirmPassword)) {
        errors.password = 'Confirm password field is needed';
    }

    if (!Validator.isLength(data.confirmPassword, {min: 6, max: 30 })) {
        errors.password = 'Confirm Password must be at least 6 characters long';
    }

    
    return {
        errors,
        isValid: isEmpty(errors)
    }


}

module.exports = validateRegisterData;