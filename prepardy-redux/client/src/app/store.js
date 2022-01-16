import { configureStore } from '@reduxjs/toolkit';
import cluesReducer from '../features/game/cluesSlice';
import scoreReducer from '../features/score/scoreSlice';
import gamesReducer from '../features/game/gameSlice';

import gameplayReducer from '../features/game/gameplaySlice';



export const store = configureStore({
  reducer: {
    clues: cluesReducer,
    games: gamesReducer,
    score: scoreReducer,
    gameplay: gameplayReducer
    // middleware: getDefaultMiddleware =>
    //   getDefaultMiddleware({
    //     serializableCheck: true,
    //   }),
    
  },
});
