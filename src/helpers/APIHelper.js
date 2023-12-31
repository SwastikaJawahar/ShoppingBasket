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
  post = async (url, data, headers = {}) => {
    url = kApiUrlEndpoint + url;

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        ...headers,
      },
      body: JSON.stringify(data),
    }).then(x => x.json());

    return new Promise((resolve, reject) => {
      this.handlePromise(resolve, reject, response);
    });
  };
  put = () => {};
  delete = () => {};

  handlePromise = (resolve, reject, response) => {
    if (response.error) {
      if (response.error.code === 'LOGIN_FAILED') {
        reject(ERROR_WRONG_CREDENTIALS);
      } else if (response.error.code === 'NETWORK_ISSUE') {
        reject(ERROR_NETWORK_NOT_AVAILBLE);
      } else {
        reject(response.error);
      }
    } else {
      resolve(response);
    }
  };
}

export default new APIHelper();
