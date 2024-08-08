import { configureStore } from '@reduxjs/toolkit';
import { AdvertReducer } from './adverts/slice';
import { FavoriteReducer } from './favorites/slice';

export const store = configureStore({
  reducer: {
    adverts: AdvertReducer,
    favorites: FavoriteReducer,
  },
});
