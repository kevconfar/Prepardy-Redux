const mongoose = require("mongoose");

const dotenv = require("dotenv");
dotenv.config();


const connectDB = async () => {
    await mongoose.connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: true,
    });

    console.log("MongoDB Connected");
};

module.exports = connectDB;
