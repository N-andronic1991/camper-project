import { createSelector } from '@reduxjs/toolkit';
import { selectAllAdverts } from '../adverts/selectors';

export const selectFavorites = state => state.favorites.items;
export const selectIsFavorite = (state, id) =>
  state.favorites.items.includes(id);

export const selectFavoriteAdverts = createSelector(
  [selectFavorites, selectAllAdverts],
  (favoriteIds, adverts) => {
    console.log('Favorite IDs:', favoriteIds);
    console.log('Adverts:', adverts);
    return adverts.filter(advert => favoriteIds.includes(advert._id));
  }
);
