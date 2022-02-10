const User = require("../connections/users");
const ErrorResponse = require("../utils/errorResponse");

const dotenv = require('dotenv');
dotenv.config();

// changed from exports.register
exports.register = async (req, res, next) => {
    const { username, email, password } = req.body;
    res.send("Register Route");
     
    try {
        const user = User.create({
            username, email, password
        });

        sendToken(user, 201, res);

    } catch (error) {
        next(error);
    }
};

// changed from exports.login
exports.login = async (req, res, next) => {
    const { username, password } = req.body;
    if (!username || !password) {
        return next(new ErrorResponse("Please provide an email and password", 400));
    
    }

    try {
        const user = await User.findOne({ email }).select("+password")

        if (!user) {
            return next(new ErrorResponse("Invalid credentials", 401)); // user not found
        }

        const isMatch = await user.matchPasswords(password);
        if (!isMatch) {
            return next(new ErrorResponse("Invalid credentials", 401)); // user not found
        }
        sendToken(user, 200, res);


    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
        
    }
};

// changed from exports.forgotpassword
exports.forgotpassword = (req, res, next) => {
    res.send("Forgot Password Route");
};

// changed from exports.resetpassword
exports.resetpassword = (req, res, next) => { 
    res.send("Reset Password Route");
};

const sendToken = (user, statusCode, res) => {
    const token = user.getSignedJwtToken();
    res.status(statusCode).json({ success: true, token });
}

// module.exports = { forgotpassword, resetpassword, login, register };
