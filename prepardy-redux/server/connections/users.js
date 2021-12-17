const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

mongoose.createConnection(process.env.MONGODB_URI);

const userSchema = require("../model/users.model");


const conn = mongoose.createConnection(process.env.MONGODB_URI);
const User = conn.model('Users', userSchema, "Users");

module.exports = User;
