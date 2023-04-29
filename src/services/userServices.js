import {
  createApi,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react';

// generar una peticion
export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_FIRST_ENDPOINT,
    // eslint-disable-next-line consistent-return
    prepareHeaders: (headers, { getState }) => {
      const token = getState().user.userToken;
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
        return headers;
      }
    },
  }),
  endpoints: (build) => ({
    getDetails: build.query({
      query: () => ({
        url: 'api/user/profile',
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetDetailsQuery } = userApi;
