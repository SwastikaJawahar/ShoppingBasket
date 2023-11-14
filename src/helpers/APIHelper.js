import {kApiUrlEndpoint, api} from '../config/WebService';

class APIHelper {
  get = (url, data, headers) => {
    url = kApiUrlEndpoint + url;
    console.log(api.get(url));
    return api
      .get(url)
      .then(response => {
        return response.data;
      })
      .catch(error => {
        console.log(error);
      });
  };
  post = () => {};
  put = () => {};
  delete = () => {};
}

export default new APIHelper();
