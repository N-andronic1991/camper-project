import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  items: [],
  loading: false,
  error: null,
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: INITIAL_STATE,
  reducers: {
    toggleFavorite(state, action) {
      console.log('Current state before toggle:', state.items);
      const id = action.payload;
      if (state.items.includes(id)) {
        // Remove from favorites
        state.items = state.items.filter(favId => favId !== id);
        console.log('Favorite removed:', action.payload);
      } else {
        // Add to favorites
        state.items.push(id);
        console.log('Favorite added:', action.payload);
      }
    },
  },
});

export const { toggleFavorite } = favoritesSlice.actions;

export const FavoriteReducer = favoritesSlice.reducer;
