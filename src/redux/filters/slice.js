import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
  // Ім'я слайсу
  name: 'filters',
  initialState: { location: '' },
  reducers: {
    changeFilter(state, action) {
      state.location = action.payload;
    },
  },
});

// Генератори екшенів
export const { changeFilter } = filtersSlice.actions;

// Редюсер слайсу
export const FilterReducer = filtersSlice.reducer;
