import { createSlice } from "@reduxjs/toolkit";

const initialGames = async () => {
    const games = await axios('localhost:3000/games/season/37/15'); // 15 random games from season 15

    // const json = await json(game)

    // return json;
    return game;
    // its JSONed in the fetch return, so it SHOULDN'T require it here ...
}

export const gameSlice = createSlice({
    name: 'games',
    initialState: {
        browseGames: initialGames,
        selectedGame: {},
        selectedCategories: [],
        nextGame: {}
    },
    reducers: {
        setSelectedGame(state, action) {
            state.selectedGame = action.payload.game;
        },
        setSelectedCategories(state, action) {
            if (state.selectedGame !== {}) {
                const rounds = action.payload.rounds;
                state.selectedCategories.push(rounds.p, rounds.dp, rounds.fp) // sorted from first to last category
            }
        }
    }

});


export const { setSelectedGame, setSelectedCategories } = gameSlice.actions;
export default gameSlice.reducer;

