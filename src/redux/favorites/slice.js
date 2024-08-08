import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  items: [],
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: INITIAL_STATE,
  reducers: {
    toggleFavorite(state, action) {
      const id = action.payload;
      if (state.items.includes(id)) {
        // Remove from favorites
        state.items = state.items.filter(favId => favId !== id);
      } else {
        // Add to favorites
        state.items.push(id);
      }
    },
  },
});

export const { toggleFavorite } = favoritesSlice.actions;

export const FavoriteReducer = favoritesSlice.reducer;
