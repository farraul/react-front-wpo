import {
  createApi,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react';

// generar una peticion
export const userApi = createApi({ //redux: para apis
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000",
    // eslint-disable-next-line consistent-return
    prepareHeaders: (headers, { getState }) => {
      const token = getState().user.userToken; // es de redux y sirve para acceder al store de redux
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
        return headers;
      }
    },
  }),
  endpoints: (build) => ({  //forma de ahacer petición sin utilizar axios y fetch
    getDetails: build.query({
      query: () => ({
        url: 'api/user/profile',
        method: 'GET',
      }),
    }),
  }),
});

export const { useGetDetailsQuery } = userApi;
//por defecto redux useGetDetails+getdetails+Query
