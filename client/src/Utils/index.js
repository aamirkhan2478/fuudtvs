import axios from 'axios';
import { logoutUser } from '../Redux/Actions/authAction';
import store from '../Redux/store';

const baseURL = 'https://web-production-429e.up.railway.app/';

const axiosInstance = axios.create({
  baseURL,
});

axiosInstance.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    if (error.response.status === 401) {
      store.dispatch(logoutUser());
      window.location.reload(true);
    }

    if (error.response.status === 403) {
      window.location.href = '/app/pagenotfound';
    }

    return Promise.reject(error);
  }
);
export default axiosInstance;
