const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

mongoose.createConnection(process.env.MONGODB_URI);

const UserSchema = require("../model/users.model");


const conn = mongoose.createConnection(process.env.MONGODB_URI);
const User = conn.model('Users', UserSchema, "Users");

module.exports = User;
