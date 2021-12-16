import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";



/*
ON THE USE OF COMMENTS IN PREPARDY CODE

    - comments beginning with "ATTENTION" are added to potentially problematic code

    - comments beginning with "NOTE" are used to explain code

*/


const initialGames = async () => {
    const games = await axios('localhost:3000/games/season/37/15'); // 15 random games from season 15

    return game; // ATTENTION: We might need to use .json() ... But maybe not (the routes auto-return JSON).
}



export const getGamesByUserQuery = createAsyncThunk(  // NOTE:   will pull games up by Season, Category, etc.
    'games/getGamesByUserQuery',
    async (searchObj) => {
        const { searchType, searchTerm } = searchObj; 

        // NOTE:  searchType = "season"||"category"
        // NOTE:  searchTerm = season number || search string
        const games = await axios(`localhost:3000/games/${searchType}/${searchTerm}`);
        return games; // ATTENTION: We might need to use .json() ... But maybe not (the routes auto-return JSON).
    }
);


const gameSlice = createSlice({
    name: 'games',
    initialState: {
        browseGames: initialGames,
        selectedGame: {},
        selectedCategories: [],
        gamesAreLoading: false, // NOTE:  gamesAreLoading & failedToLoadGames were added for getGamesByCategory's lifecycle
        failedToLoadGames: false //       will handle rejection/pending/fulfilled actions
    },
    reducers: {
        setSelectedGame(state, action) {
            const { p, dp, fp } = action.payload.rounds; // NOTE:  destructures rounds, allowing easy access to all categories

            state.selectedGame = action.payload;
            state.selectedCategories.push(p, dp, fp); // NOTE:  sorted from first category -> last category
        },
        changeBrowseGames(state, action) {
            state.browseGames = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getGamesByUserQuery.fulfilled, (state, action) => {
            state.browseGames = action.payload;
            state.gamesAreLoading = false;
            state.failedToLoadGames = false;
        }),
        builder.addCase(getGamesByUserQuery.pending, (state) => {
            state.gamesAreLoading = true;
            state.failedToLoadGames = false;
        }),
        builder.addCase(getGamesByUserQuery.rejected, (state) => {
            state.gamesAreLoading = false;
            state.failedToLoadGames = true;
        })
    }
});


export const { setSelectedGame, browseGames, selectedGame, selectedCategories, changeBrowseGames } = gameSlice.actions;
export default gameSlice.reducer;





// I REMOVED THE FOLLOWING FROM INITIALSTATE:
//  -  nextGame: {} // If included, incorporate logic to to analyze Game.date to find the next game