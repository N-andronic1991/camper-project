import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isModalOpen: false,
  selectedAdvertId: null,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal(state) {
      state.isModalOpen = true;
    },
    closeModal(state) {
      state.isModalOpen = false;
    },
    setSelectedAdvert(state, action) {
      state.selectedAdvertId = action.payload;
    },
  },
});

export const { openModal, closeModal, setSelectedAdvert } = modalSlice.actions;
export const ModalReducer = modalSlice.reducer;
