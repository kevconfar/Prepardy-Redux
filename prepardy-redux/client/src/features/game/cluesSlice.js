import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from 'axios';

import { testClues } from "../../testingData/testClues";


export const setCluesState = createAsyncThunk(
    'clues/setCluesState',
    async (obj) => {
        const id = obj.gameId

        const clues = await axios(`http://localhost:3000/clues/id/${id}`);
        return clues.data

    }
)

const cluesSlice = createSlice({
    name: 'clues',
    initialState: {
        selectedClue: {}, // may remove later
        clues: testClues, // changed from empty array for testing purposes
        incorrectClues: [],
        correctClues: [],
        cluesAreLoading: false, 
        cluesFailedToLoad: false 
    },
    reducers: {
        setSelectedClue(state, action) {
            state.selectedClue = action.payload; // NOTE:  when a clue is clicked, it will be assigned to selectedClue
        },                                       // ATTENTION:  this MIGHT be unnecessary
        addIncorrectClue(state, action) {
            const index = state.clues.indexOf(action.payload);  
            state.incorrectClues.push(action.payload); // NOTE:  missed clues are added to the incorrectClues state
            state.clues = state.clues.splice(index, 1); // NOTE:   missed clues are removed from the Clues state
        },
        addCorrectClue(state, action) {
            const index = state.clues.indexOf(action.payload);
            state.correctClues.push(action.payload); // NOTE:  correct clues are added to the correctClues state
            state.clues = state.clues.splice(index, 1); // NOTE:  correct clues are removed from the Clues state
        }
    },
    extraReducers: (builder) => {
        builder.addCase(setCluesState.fulfilled, (state, action) => {
            state.clues.push(action.payload);
            state.cluesAreLoading = false;
            state.clesFailedToLoad = false;
        })
        builder.addCase(setCluesState.pending, (state) => {
            state.cluesAreLoading = true;
            state.clesFailedToLoad = false;
        })
        builder.addCase(setCluesState.rejected, (state) => {
            state.cluesAreLoading = false;
            state.clesFailedToLoad = true;
        })
    }
});


export const selectAllClues = (state) => state.clues.clues;

export const { setSelectedClue, addIncorrectClue, addCorrectClue } = cluesSlice.actions;
export default cluesSlice.reducer;

