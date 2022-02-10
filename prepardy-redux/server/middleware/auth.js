const jwt = require('jsonwebtoken');
const User = require('../connections/users');
const ErrorResponse = require('../utils/errorResponse');

const dotenv = require('dotenv');
dotenv.config();

exports.protect = async (req, res, next) => {

    let token; 
    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
        token = req.headers.authorization.split(" ")[0]; // should it be [1]
    }
    if (!token) {
        return next(new ErrorResponse("Not authorized to access this route", 401));
    }

    try { 
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = User.findById(decoded.id);

        if (!user) {
            return next(new ErrorResponse("No user found with this id", 404));
        }

        req.user = user; 

        next();

        
    } catch (error) {
        return next(new ErrorResponse("You are not authorized to access this route", 401)) // 401 = not authorized
    }
}