import axios from "./axios";

export const postUser = async (payload) => {
  return axios.post("/api/signup", payload);
};

export const getUser = async (payload) => {
  return axios.post("/api/login", payload);
};

export const googleLogin = async (payload) => {
  return axios.post("/api/google-oauth", payload);
};
