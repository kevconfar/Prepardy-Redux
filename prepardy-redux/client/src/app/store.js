import { configureStore } from '@reduxjs/toolkit';
import cluesReducer from '../features/game/cluesSlice';
// import scoreReducer from '../features/score/scoreSlice';
import gamesReducer from '../features/game/gameSlice';



export const store = configureStore({
  reducer: {
    clues: cluesReducer,
    games: gamesReducer,
    // middleware: getDefaultMiddleware =>
    //   getDefaultMiddleware({
    //     serializableCheck: true,
    //   }),
    
  },
});
