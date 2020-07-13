import axios from "axios";
import process from "process";

axios.interceptors.request.use(
  (config) => {
    const token = localStorage.token;
    if (token) config.headers.authorization = JSON.parse(token);

    config.baseURL = process.env.JITSI_API || "http://localhost:4000";

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (res) => res,
  (error) => {
    const { response } = error;
    console.log(response);

    if (response) alert(response.data?.message);

    return Promise.reject(error);
  }
);

export default axios;
