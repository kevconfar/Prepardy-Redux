const express = require('express');
const cors = require('cors');

const connectDB = require('./db/conn.js');
const errorHandler = require('./middleware/error');

const dotenv = require('dotenv');
dotenv.config();

const app = express();

// DB Connection
connectDB();

app.use(cors  ());
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));

// User Routes
app.use("/api/auth", require("./routes/auth"));
// app.use("/api/private", require("./routes/private"));
// Game and Clue Routes
app.use('/games', require("./routes/games.js"));
app.use('/clues', require("./routes/clues.js"));

app.use(errorHandler);

const server = app.listen(process.env.PORT, () =>
    console.log(`Sever running on port ${process.env.PORT}`)
);








// const express = require('express')
// const cors = require('cors')
// const mongoose = require('mongoose')

// // const gameRouter = require("./routes/games")
// // const clueRouter = require("./routes/clues")

// const errorHandler = require('./middleware/error') // added 2/4 ---> Will be last middlware included

// const authRouter = require("./routes/auth");
// const privateRouter = require("./routes/private");


// const dotenv = require('dotenv');
// dotenv.config();

// const app = express();

// // app.get('/test', (req, res) => {
    
// //     console.log("TEST WORKED")
// //     res.send('test worked')
    
// // });

// app.use(cors());
// app.use(express.json({ extended: true }));
// app.use(express.urlencoded({ extended: true }));


// app.use('/games', require("./routes/games.js"));
// app.use('/clues', require("./routes/clues.js"));
// app.use('/api/auth', require("./routes/auth.js")); // added 2/4
// app.use('/api/private', require("./routes/private.js")); // added 2/4


// app.use(errorHandler); // added 2/4 -- NOTE: must be included last


// mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true })
//     .then(() => {
//         app.listen(3000, () => {
//             console.log(`Server running on port:  ${process.env.PORT}`)
//         })
//     })



