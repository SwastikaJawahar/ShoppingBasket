import {create} from 'apisauce';

export const kApiUrlEndpoint = 'https://jsonplaceholder.typicode.com';
export const api = create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});

export const kApiTodos = '/todos';
