import errorHandler from "../errorHandler/errorHandler";

const successHandler = (response) => { 
  // stop loading
  if (response.status && response.status !== 200) {
    response.status = response.data.error ? response.data.error.code : response.data.code;
    return errorHandler({ response })
  }
  else {
    return response;
  }
};
export default successHandler;