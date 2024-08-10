import { createSelector } from '@reduxjs/toolkit';
import { selectFiltersLocation } from '../filters/selectors';
export const selectAdverts = state => state.adverts.items;
export const selectLoading = state => state.adverts.loading;
export const selectError = state => state.adverts.error;
export const selectPage = state => state.adverts.page;
export const selectLimit = state => state.adverts.limit;

export const selectFilteredAdverts = createSelector(
  [selectAdverts, selectFiltersLocation],
  (adverts, filtersLocation) => {
    console.log('Adverts before filtering:', adverts);
    console.log('Filtering by location:', filtersLocation);
    return adverts.filter(advert =>
      advert.location.toLowerCase().includes(filtersLocation.toLowerCase())
    );
  }
);
