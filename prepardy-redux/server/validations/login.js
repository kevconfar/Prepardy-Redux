const Validator = require("validator"); // HAVE NOT INSTALLED
const isEmpty = require("is-empty"); // HAVE NOT INSTALLED ... is this an actual package?

module.exports = function validateLoginInput(data) {
    let errors = {};
    // Convert empty fields to an empty string so we can use validator functions
    data.email = !isEmpty(data.email) ? data.email : "";
    data.password = !isEmpty(data.password) ? data.password : "";
    // Email checks
    if (Validator.isEmpty(data.email)) {
        errors.email = "Email field is required";
    } else if (!Validator.isEmail(data.email)) {
        errors.email = "Email is invalid";
    }
    // Password checks
    if (Validator.isEmpty(data.password)) {
        errors.password = "Password field is requir ed";
    }
    return {
        errors,
        isValid: isEmpty(errors)
    };