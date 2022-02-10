const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const UserSchema = new mongoose.Schema({

    username: {
        type: String,
        required: [true, "Please provide a username."]
    },
    email: {
        type: String,
        required: [true, "Please provide an email."],
        unique: true,
        match: [
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            "Please provide a valid email address"
        ]
    },
    password: {
        type: String,
        required: [true, "Please add a password"],
        minlength: 6,
        select: false

    },
    resetPasswordToken: String,
    resetPasswordExpire: Date,
    // gamesPlayed: {
    //     type: [Map] // ex:  [ {gameID: Num, Incorrect: Num, Correct: Num, score: Num, won: Boolean}, ... ]
    // },
    // incorrectClues: {
    //     type: [Map] // ex:  [ { clueId, clue, answer, userAnswer}]
    // },
    // correctClues: {
    //     type: [Map] // ex: [ { clueId, answer }] .... OR it could just be an array of clueId's
    // },
    // weakSubjects: {
    //     type: [Map] // OPTIONAL ex: [ { person: "Napoleon", clueIds: [Strings], date:  } ]
    // },
    // buzzTimes: {
    //     type: Map // ex: { min: Num, max: Num, missed: num, avg: Num, totalBuzzes: Num }
    // },

});

UserSchema.pre("save", async function(next) {
    if(!this.isModified("password")) {
        next();
    }

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next(); 
})

UserSchema.methods.matchPasswords = async function(password) {
    return await bcrypt.compare(password, this.password)

}

UserSchema.methods.getSignedToken = function() {
    return jwt.sign({ id: this._id }, process.env.JWT_SECRET, { 
        expiresIn: process.env.JWT_EXPIRE 
    });

}
 

module.exports = UserSchema;


/*
SCHEMA NOTES:

- WEAK_SUBJECTS: if included, it will be created post-game when the user goes through their missed clues. 
For example, a clue about "Napoleon" will create a new weakSubject doc like the following:
    {
        personName: "Napoleon Bonaparte",
        dates: [Map], // <---- dates from the clue will be added to this ... could just be one value
        clueIds: [ array of IDs that correspond to clues about Napoleon ],
        country: "France",
        related: [{type: "Person", name: "Wellington"}, {type: "Country", name: "France" }]
    }
If another clue about napoleon were to be encountered, it would NOT create a new document, but would instead update this one.


*/