import Axios from "axios";

const axios = Axios.create({
  baseURL: process.env.API_BASE_URL || "http://localhost:4000/",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

axios.interceptors.response.use(
  function (response) {
    // Do something with response data
    return response;
  },
  function (error) {
    // Do something with response error
    return error?.response;
  }
);

export default axios;
