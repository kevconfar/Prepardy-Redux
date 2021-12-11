import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

import { selectedGame } from '../gamemenu/gameMenuSlice'; // import the selectedGame 



export const gameboardSlice = createSlice({
    name: 'gameboard',
    initialState: {
        displayAnswerForm: false, // toggles true when clue selected and the answer form opens, false when clue is answered
        displayBoard: true, // the gameboard will be displayed until first clue is clicked
        


    }



});


// export const cluesSlice = createSlice({
//     name: 'clues',
//     initialState: {
//         clues: cluesById,
//         incorrect: [], // will be populated with Clue objects after incorrect user answers

//     }


// });



