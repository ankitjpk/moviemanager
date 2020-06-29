import axios, {AxiosRequestConfig} from 'axios';
import {BASE_URL} from '../api/endpoints';
axios.defaults.baseURL = BASE_URL;
const SUCCESS_STATUS_CODES = [200, 201, 202, 203, 204, 205, 206];

// axios.interceptors.request.use(
//   config => {
//     // perform a task before the request is sent
//     console.log('Request was sent');
//     console.log(`${config.baseURL}${config.url}`);

//     return config;
//   },
//   error => {
//     // handle the error
//     return Promise.reject(error);
//   },
// );

export const http = (url: string, options: AxiosRequestConfig): Promise<any> =>
  axios({
    url,
    timeout: 5000,
    ...options,
  })
    .then(
      response =>
        SUCCESS_STATUS_CODES.includes(response.status)
          ? response.data
          : Promise.reject(response.data),
      error => Promise.reject(error.response.data),
    )
    .then(response => ({response}), error => ({error: error.error}))
    .catch(error => error);

export const setToken = (token: string) => {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};
//Remove auth token
export default http;
