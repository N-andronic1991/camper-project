// import { createSelector } from '@reduxjs/toolkit';
export const selectAdverts = state => state.adverts.items;
export const selectLoading = state => state.adverts.loading;
export const selectError = state => state.adverts.error;
export const selectPage = state => state.adverts.page;
export const selectLimit = state => state.adverts.limit;
