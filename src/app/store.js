import { configureStore } from '@reduxjs/toolkit';
import { userApi } from '../services';
import userReducer from './features/user/userSlices';v //cambiamos nombre

export const store = configureStore({
  reducer: {
    user: userReducer, //estado
    [userApi.reducerPath]: userApi.reducer, //api
  },
  //estandarizamos el proceso
  //desde el slice permitir que use el ExtraReducer y actualizar los estados cuando termine de ejectuarse la peticion (el fetch)
  //por defecto de redux, permite ser intermediario entre store y peticiones externas

  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(userApi.middleware),
});
