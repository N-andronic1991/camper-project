import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://66b349e87fba54a5b7ec4cdd.mockapi.io',
});

export const requestContacts = async () => {
  const { data } = await instance.get('/adverts');
  return data;
};
