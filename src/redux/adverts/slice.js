import { createSlice } from '@reduxjs/toolkit';
import { apiGetAdverts } from './operation';

const INITIAL_STATE = {
  items: [],
  loading: false,
  error: null,
  page: 1,
  limit: 4,
};
const advertsSlice = createSlice({
  name: 'adverts',
  initialState: INITIAL_STATE,
  reducers: {
    incrementPage(state) {
      state.page += 1;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(apiGetAdverts.pending, state => {
        state.loading = true;
        state.error = null;
      })

      .addCase(apiGetAdverts.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        const newItems = action.payload.filter(
          newItem => !state.items.some(item => item._id === newItem._id)
        );
        state.items = [...state.items, ...newItems];

        // state.items = [...state.items, ...action.payload];
      })
      .addCase(apiGetAdverts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { incrementPage } = advertsSlice.actions;

export const AdvertReducer = advertsSlice.reducer;
