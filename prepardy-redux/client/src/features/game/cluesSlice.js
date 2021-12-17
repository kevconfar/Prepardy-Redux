import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const setClueState = createAsyncThunk(
    'clues/setClueState',
    async (gameID) => {
        const clues = [
            {clue1: "clue 1"},
            {clue2: "clue 2"},
            {clue3: "clue 3"}
        
        ];
        // await axios(`localhost:300/clues/id/${gameID}`);
        return clues; // ATTENTION: Might require .json() ... Maybe not (the backend routes use JSON).

    }
)

const cluesSlice = createSlice({
    name: 'clues',
    initialState: {
        selectedClue: {}, // may remove later
        clues: [],
        incorrectClues: [],
        correctClues: [],
        cluesAreLoading: false, // NOTE: added for setCluesState thunk
        cluesFailedToLoad: false // NOTE: added for setCluesState thunk
    },
    reducers: {
        // setClues(state, action) {             // ATTENTION:  removed and replaced with setCluesState
        //     state.clues = action.payload;     //  will be uncommented if setCluesState does not work
        // },

        setSelectedClue(state, action) {
            state.selectedClue = action.payload; // NOTE:  when a clue is clicked, it will be assigned to selectedClue
        },                                       // ATTENTION:  this MIGHT be unnecessary
        addToIncorrectClues(state, action) {
            const index = state.clues.indexOf(action.payload);  
            state.incorrectClues.push(action.payload); // NOTE:  missed clues are added to the missedClues state
            state.clues = state.clues.splice(index, 1); // NOTE:   missed clues are removed from the Clues state
        },
        addToCorrectClues(state, action) {
            const index = state.clues.indexOf(action.payload);
            state.correctClues.push(action.payload);
            state.clues = state.clues.splice(index, 1);
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

export const { setCluesState, setSelectedClue, addMissedClue } = cluesSlice.actions;
export default cluesSlice.reducer;


