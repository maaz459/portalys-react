import Axios from "axios";
import secret from "../../secrets.json";
const axios = Axios.create({
  baseURL: secret.apiBaseUrl || "http://localhost:4000/",
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
