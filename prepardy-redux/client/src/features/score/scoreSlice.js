import { createSlice } from "@reduxjs/toolkit";




/* Other Stats To Possible Track:
    - $ in Bank before each daily double = [ $3000, $7000, $1 ]


*/

const scoreSlice = createSlice({
    name: 'score',
    initialState: {
        score: 0
    },
    reducers: {
        incrementScore(state, action) {
            state.score += action.payload;
        },
        decrementScore(state, action) {
            state.score -= action.payload;
        }
    }
});

export const selectScore = (state) => state.score.score;

export const { incrementScore, decrementScore } = scoreSlice.actions;
export default scoreSlice.reducer;