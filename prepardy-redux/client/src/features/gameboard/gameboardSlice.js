import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios';

// STATUS:  INCOMPLETE

// RESPONSIBLE FOR STATE THAT MANAGES GAMEPLAY.



export const gameboardSlice = createSlice({
    name: 'gameboard',
    initialState: {
        displayAnswerForm: false, // toggles true when clue selected and the answer form opens, false when clue is answered
        displayBoard: true, // the gameboard will be displayed until first clue is clicked
    },
    reducers: {

    }
});



