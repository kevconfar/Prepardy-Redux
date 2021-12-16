import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


const cluesSlice = createSlice({
    name: 'clues',
    initialState: {
        selectedClue: {},
        clues: [],
        missedClues: []
    },
    reducers: {
        // setClues = async (state, action) => {
        //     const clues = await axios(`localhost:3000/clues/id/${action.payload.gameId}`)
        //     state.clues.push(clues); // used to initially set the clues
        // },
        setClues(state, action) {
            state.clues = action.payload;
        },
        setSelectedClue(state, action) {
            state.selectedClue = action.payload; // when a clue is clicked, it will be assigned to selectedClue
        },
        addMissedClue(state, action) {
            const index = clues.indexOf(action.payload);  
            state.missedClues.push(action.payload); // missed clues are added to the missedClues state
            state.clues = clues.splice(index, 1); // missed clues are removed from the Clues state
        }
    }
});

export const { setClues, setSelectedClue, addMissedClue } = cluesSlice.actions;
export default cluesSlice.reducer;


