import { configureStore } from '@reduxjs/toolkit';
import { userApi } from '../services';
import userReducer from './features/user/userSlices';

export const store = configureStore({
  reducer: {
    user: userReducer,
    [userApi.reducerPath]: userApi.reducer,
  },
  //estandarizamos el proceso
  //desde el slice permitir que use el ExtraReducer y actualizar los estados cuando termine de ejectuarse la peticion (el fetch)
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware),
});
