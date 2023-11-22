import {create} from 'apisauce';

export const kApiUrlEndpoint = 'http://localhost:3000/api';
export const kApiUserSignUp = '/Users';
export const kApiUserLogin = '/Users/login';
export const kApiUserLogout = '/Users/logout';
export const kApiPostItems = '/items';
export const kApiGetItems = '/items';
export const api = create({
  baseURL: 'http://localhost:3000',
});
