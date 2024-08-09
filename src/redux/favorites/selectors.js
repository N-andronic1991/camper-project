import { createSelector } from '@reduxjs/toolkit';
import { selectAdverts } from '../adverts/selectors';

export const selectFavorites = state => state.favorites.items;
export const selectIsFavorite = (state, id) =>
  state.favorites.items.includes(id);

export const selectFavoriteAdverts = createSelector(
  [selectFavorites, selectAdverts],
  (favoriteIds, adverts) =>
    adverts.filter(advert => favoriteIds.includes(advert._id))
);
