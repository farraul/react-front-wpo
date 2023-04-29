import {
  createApi,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react';

// generar una peticion
export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000",
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
