import axios from 'axios';
import Config from 'react-native-config';

// create an axios instance
const service = axios.create({
  baseURL: Config.API_END_POINT, // url = base url + request url
  timeout: 300000, // request timeout
});

// request interceptor
service.interceptors.request.use(
  config => {
    config.params = config.params || {};

    config.headers['Content-Type'] = 'application/json';

    if (config.token) {
      config.headers.Authorization = `Bearer ${config.token}`;
    }
    if (config.isFormData) {
      config.headers['Content-Type'] =
        'multipart/form-data; boundary=<calculated when request is sent>';
    }

    return config;
  },
  error => {
    return error;
  },
);

// response interceptor
service.interceptors.response.use(
  response => {
    const res = response;
    return res;
  },
  error => {
    return Promise.reject(error);
  },
);

export default service;
