/* eslint-disable prettier/prettier */

const getValidationError = (errorCode) => {
  const codeMatcher = {
    'Invalid email or password': 'Email o contraseña incorrectas',
    ERR_BAD_REQUEST: 'Request failed with status code 401',
    ERR_401: 'Error 401',
    ERR_403: 'Error 403',
    ERR_404: 'Error 404 de interceptor',

  };
  return codeMatcher[errorCode]
};

export default getValidationError;
