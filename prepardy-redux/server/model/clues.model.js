const mongoose = require("mongoose");

const CluesSchema = new mongoose.Schema({
    id : {
        type: String,
        unique: true
    },
    question : {
        type : String,
    },
    answer : {
        type : String
    },
    value : {
        type : Number
    },
    category : {
        type : String
    },
    gameID : {
        type : Number
    },
    played : { // CHANGED TO "played" FROM "correct"
        type : Boolean,
        default : false
    },
    img : Boolean, // ADDED img to keep track of which clues are supposed to have images
    dd: Boolean // ADDED dd (Daiily Double) on DECEMBER 12

});


module.exports = CluesSchema


