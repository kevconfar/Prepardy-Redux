import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from 'axios';

import { testClues } from "../../testingData/testClues";

import { selectGame } from "./gameSlice";





export const setCluesState = createAsyncThunk(
    'clues/setCluesState',
    async (obj) => {
        const id = obj.gameID

        const clues = await axios(`http://localhost:3000/clues/id/${id}`);
        return clues.data

    }
)

// export const setCluesState = createAsyncThunk(
//     'clues/setCluesState',
//     async (obj) => {
//         const { gameID, categories } = obj;
//         const result = await axios(`http://localhost:3000/clues/id/${gameID}`);
//         const clues = result.data;

//         const output = { p: [], dp: [], fp: []}
//         // const cluesByCat = (input) => clues.filter((x) => x.category === input).map((x) => {x.question, x.value, x.id, x.answer})
        
//         categories.each((key, values) => {
//             output[key] = []
//             values.each((title) => {
//                 output[key][title] = clues.filter((x) => x.category === title);
//             })
//         })

//         return output;
//         // return clues.data

//     }
// )



const cluesSlice = createSlice({
    name: 'clues',
    initialState: {
        selectedClue: {}, // may remove later
        // clues: {}, // changed from empty array for testing purposes
        clues: testClues,
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
            state.clues = action.payload;
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


export const selectCorrectClues = (state) => state.clues.correctClues;
export const selectIncorrectClues = (state) => state.clues.incorrectClues;
export const selectAllClues = (state) => state.clues.clues;
export const selectSelectedClue = (state) => state.clues.selectedClue;

export const selectCluesByCategory = (state, category) => state.clues.allClues.filter((x) => x.category === category);

export const numberOfAnsweredClues = (state) => state.clues.incorrectClues.length + state.clues.correctClues.length;

export const { setSelectedClue, addIncorrectClue, addCorrectClue } = cluesSlice.actions;
export default cluesSlice.reducer;

