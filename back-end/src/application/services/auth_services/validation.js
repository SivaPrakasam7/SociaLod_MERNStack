const email_pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/i;

// Login validation
exports.loginValidation = (data) => {
    var error = {};
    const { email, password } = data;
    if (!email.match(email_pattern)) {
        error.code = 400;
        error.message = 'not a valid Email';
    } else if (password.length < 8 || !password) {
        error.code = 400;
        error.message = 'password must be greater than 8';
    }
    if (error.code) return error;
    else return true;
}

// Registration validation
exports.registerValidation = (data) => {
    var error = {};
    const { email, password } = data;
    if (!email.match(email_pattern)) {
        error.code = 400;
        error.message = 'not a valid Email';
    } else if (password.length < 8 || !password) {
        error.code = 400;
        error.message = 'password must be greater than 8';
    }
    if (error.code) return error;
    else return true;
}