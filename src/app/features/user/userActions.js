/* eslint-disable consistent-return */
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from '@/api/axios';
import { userServicesConfig } from '@/services';

const config = {
  headers: {
    'Content-Type': 'application/json',
  },
};

export const userLogin = createAsyncThunk(
  userServicesConfig.userLogin,
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(
        '/api/user/login',
        { email, password },
        config,
      );
      localStorage.setItem('userToken', data.userToken);
      return data;
    } catch (error) {
      if (error.response) {
        console.log("error26")

        return rejectWithValue(error.message);
      }
    }
  },
);

export const userRegister = createAsyncThunk(
  userServicesConfig.userRegister,
  async ({ firstName, email, password }, { rejectWithValue }) => {
    try {
      await axios.post(
        '/api/user/register',
        { firstName, email, password },
        config,
      );
    } catch (error) {
      if (error.response) {
        return rejectWithValue(error.message);
      }
    }
  },
);
