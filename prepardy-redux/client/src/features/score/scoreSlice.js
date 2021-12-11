import { createSlice } from "@reduxjs/toolkit";


const scoreSlice = createSlice({
    name: 'score',
    initialState: {
        score: 0
    },
    reducers: {
        incrementScore(state, action) {
            state.score += action.type.points;
        },
        decrementScore(state, action) {
            state.score -= action.type.points;
        }
    }
});

export const { incrementScore, decrementScore } = scoreSlice.actions;
export default scoreSlice.reducer;