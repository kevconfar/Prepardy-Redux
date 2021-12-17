const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    gamesPlayed: {
        type: [Map] // ex:  [ {gameID: Num, Incorrect: Num, Correct: Num, score: Num, won: Boolean}, ... ]
    },
    incorrectClues: {
        type: [Map] // ex:  [ { clueId, clue, answer, userAnswer}]
    },
    correctClues: {
        type: [Map] // ex: [ { clueId, answer }] .... OR it could just be an array of clueId's
    },
    weakSubjects: {
        type: [Map] // OPTIONAL ex: [ { person: "Napoleon", clueIds: [Strings], date:  } ]
    },
    buzzTimes: {
        type: Map // ex: { min: Num, max: Num, missed: num, avg: Num, totalBuzzes: Num }
    },


});


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