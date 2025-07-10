import axios from "axios";
import { turnOffLoading, turnOnLoading } from "../redux/spinnerSlice";
import { getDispatch } from "../redux/dispatchService";

export let http = axios.create({
  baseURL: "https://elearningnew.cybersoft.edu.vn",
  headers: {
    TokenCybersoft:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA4MiIsIkhldEhhblN0cmluZyI6IjIwLzExLzIwMjUiLCJIZXRIYW5UaW1lIjoiMTc2MzU5NjgwMDAwMCIsIm5iZiI6MTczNDI4NTYwMCwiZXhwIjoxNzYzNzQ4MDAwfQ.QbEZveH7dLuVnfzAyNgNtcIQzJu-95ShhXNZhmFB-H8",
    // Authorization: `Bearer ${
    //   JSON.parse(localStorage.getItem("USER_LOGIN"))?.accessToken
    // }`,
  },
});

// Add a request interceptor
http.interceptors.request.use(
  function (config) {
    try {
      getDispatch()(turnOnLoading());
    } catch (error) {}

    // Do something before request is sent
    const token = JSON.parse(localStorage.getItem("USER_LOGIN"))?.accessToken;
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
http.interceptors.response.use(
  function (response) {
    getDispatch()(turnOffLoading());
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    getDispatch()(turnOffLoading());

    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

export default http;
