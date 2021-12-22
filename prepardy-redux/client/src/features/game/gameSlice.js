import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { useEffect } from "react";

import { testGames, testGame } from "../../testingData/testGames";

import axios from 'axios';
// const axios = require('axios');


// export const getGamesByUserQuery = createAsyncThunk(  // NOTE:   will pull games up by Season, Category, etc.
//     'games/getGamesByUserQuery',
//     async (searchObj) => {
//         const { searchType, searchTerm } = searchObj; 

//         // NOTE:  searchType = "season"||"category"
//         // NOTE:  searchTerm = season number || search string
//         const games = await axios(`localhost:3000/games/${searchType}/${searchTerm}`);
//         const json = await games.json();
        
//         return json; // ATTENTION: We might need to use .json() ... But maybe not (the routes auto-return JSON).
//     }
// );

export const getNewGames = createAsyncThunk(
    'games/getNewGames',
    async (searchObj) => {
        const { searchType, searchTerm } = searchObj;
        const result = await axios(`http://localhost:3000/games/${searchType}/${searchTerm}/10`);

        return result.data;
    }
)

const gameSlice = createSlice({
    name: 'games',
    initialState: {
        allGames: testGames,
        selectedGame: testGame,
        selectedCategories: [],
        gamesAreLoading: false, // NOTE:  gamesAreLoading & failedToLoadGames were added for getGamesByCategory's lifecycle
        failedToLoadGames: false //       will handle rejection/pending/fulfilled actions
    },
    reducers: {
        setSelectedGame(state, action) {
            const { p, dp, fp } = action.payload.rounds; // NOTE:  destructures rounds, allowing easy access to all categories

            state.selectedGame = action.payload;
            state.selectedCategories.push(p, dp, fp); // NOTE:  sorted from first category -> last category
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getNewGames.fulfilled, (state, action) => {
            state.allGames = action.payload;
            state.gamesAreLoading = false;
            state.failedToLoadGames = false;
        })
        builder.addCase(getNewGames.pending, (state) => {
            state.gamesAreLoading = true;
            state.failedToLoadGames = false;
        })
        builder.addCase(getNewGames.rejected, (state) => {
            state.gamesAreLoading = false;
            state.failedToLoadGames = true;
        })

    }
    // extraReducers: (builder) => {
    //     builder.addCase(getGamesByUserQuery.fulfilled, (state, action) => {
    //         state.browseGames = action.payload;
    //         state.gamesAreLoading = false;
    //         state.failedToLoadGames = false;
    //     })
    //     builder.addCase(getGamesByUserQuery.pending, (state) => {
    //         state.gamesAreLoading = true;
    //         state.failedToLoadGames = false;
    //     })
    //     builder.addCase(getGamesByUserQuery.rejected, (state) => {
    //         state.gamesAreLoading = false;
    //         state.failedToLoadGames = true;
    //     })
    // }
});


export const selectGame = (state) => state.games.selectedGame;
export const selectAllGames = (state) => state.games.allGames;


export const { setSelectedGame } = gameSlice.actions;
export default gameSlice.reducer;





// I REMOVED THE FOLLOWING FROM INITIALSTATE:
//  -  nextGame: {} // If included, incorporate logic to to analyze Game.date to find the next game