import axios from '@/api/axios';
import { SnackbarUtilities } from '@/utilities';
import  getValidationError  from '@/utilities/getValidation';

export const axiosInterceptor = () => {
  axios.interceptors.response.use(
    (response) => {
      console.log('response', response);
      return response;
    },

    (error) => {
      console.log(error);
      console.log(typeof error)
      SnackbarUtilities.error(getValidationError(error.response?.data.message));
      return Promise.reject(error);
    },
  );
};
