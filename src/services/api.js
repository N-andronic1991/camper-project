import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://66b349e87fba54a5b7ec4cdd.mockapi.io',
});

export const getFavorites = async () => {
  const { data } = await instance.get('/favorites');
  return data;
};

export const addingFavorites = async advert => {
  const { data } = await instance.post('/favorites', advert);
  return data;
};

export const deletingFavorites = async advertId => {
  const { data } = await instance.delete(`/favorites/${advertId}`);
  return data;
};
