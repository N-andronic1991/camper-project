import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://66b349e87fba54a5b7ec4cdd.mockapi.io',
});

export const apiGetAdverts = createAsyncThunk(
  'adverts/getAll',
  async ({ page, limit }, thunkApi) => {
    try {
      console.log('Requesting page:', page, 'with limit:', limit);
      const { data } = await instance.get('/adverts', {
        params: {
          page,
          limit,
        },
      });
      console.log('API Response:', data);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
