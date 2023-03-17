import { createAsyncThunk } from '@reduxjs/toolkit';

import * as api from 'api/auth-api';

export const signup = createAsyncThunk(
  'auth/signup',
  async (data, thunkAPI) => {
    try {
      const result = await api.signUp(data);
      return result;
    } catch ({ response }) {
      return thunkAPI.rejectWithValue(response.data.message);
    }
  }
);

export const login = createAsyncThunk('auth/login', async (data, thunkAPI) => {
  try {
    const result = await api.logIn(data);
    return result;
  } catch ({ response }) {
    return thunkAPI.rejectWithValue(response.data.message);
  }
});
