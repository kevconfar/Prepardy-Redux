import { createSlice } from "@reduxjs/toolkit";

const gameplaySlice = createSlice({
    name: 'gameplay',
    initialState: {
        clueIsSelected: false,
        answeredQuestions: 0,
        round: "p",
        assistMode: false,
        gameComplete: false
    },
    reducers: {
        setIsClueSelected(state) {
            (state.clueIsSelected) ? state.clueIsSelected = false : state.clueIsSelected = true;
        },
        incrementAnsweredQuestions(state) {
            state.answeredQuestions += 1;
            if (state.answeredQuestions === 30) state.round = "dp";
            if (state.answeredQuestions === 60) state.round = "fp";
        },
        setAssistMode(state) {
            (state.assistMode) ? state.assistMode = false : state.assistMode = true;
        },
        setGameComplete(state) {
            state.gameComplete = true;
        }
    }
});

export const isClueSelected = (state) => state.gameplay.clueIsSelected;

export const answeredQuestions = (state) => state.gameplay.answeredQuestions;
export const selectRound = (state) => state.gameplay.round;

export const { setIsClueSelected, incrementAnsweredQuestions, setGameComplete } = gameplaySlice.actions;
export default gameplaySlice.reducer;