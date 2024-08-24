import { configureStore } from '@reduxjs/toolkit';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const favoritesPersistConfig = {
  key: 'favorites',
  storage,
  whitelist: ['items'],
};

const advertsPersistConfig = {
  key: 'adverts',
  storage,
  blacklist: ['loading', 'error'],
};

import { AdvertReducer } from './adverts/slice';
import { FavoriteReducer } from './favorites/slice';
import { FilterReducer } from './filters/slice';
import { ModalReducer } from './modal/slice';

export const store = configureStore({
  reducer: {
    adverts: persistReducer(advertsPersistConfig, AdvertReducer),
    favorites: persistReducer(favoritesPersistConfig, FavoriteReducer),
    modal: ModalReducer,
    filters: FilterReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
