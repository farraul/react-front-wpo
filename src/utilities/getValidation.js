/* eslint-disable prettier/prettier */
const getValidationError = (errorCode) => {
  const codeMatcher = {
    ERR_BAD_REQUEST: 'Request failed with status code 401',
    ERR_401: 'Error 401',
    ERR_403: 'Error 403',
  };
  return codeMatcher[errorCode]
};

export default getValidationError;
