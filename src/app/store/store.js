import { configureStore } from '@reduxjs/toolkit';
import matchesReducer from './slices/continentSlice';

const store = configureStore({
  reducer: {
    matches: matchesReducer,
  },
});

export default store;
