const mongoose = require("mongoose");

const gamesSchema = new mongoose.Schema({
    gameID: {
        type: Number,
        unique: true
        // required: true
    },
    urlID : {
        type: Number,
        unique: true
        // required: true
    },
    date : {
        type: String,
    },
    scores : {
        type: Array
    },
    season : {
        type: Number
    },
    rounds : {
        type: Map,
        of: Array
    },
    // p: [String], // ADDED DEC 12
    // dp: [String], // ADDED DEC 12
    // fp: String, // ADDED DEC 12
    played: { 
        type: Boolean,
        default: false
    }
});

module.exports = gamesSchema

 


// REMOVED ON DECEMBER 12:     categories: [String], // AUG 19: Added categories as a field
