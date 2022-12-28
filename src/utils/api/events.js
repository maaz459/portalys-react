import axios from "./axios";

export const addEvent = async (payload) => {
  return axios.post("/api/create", payload, {
    headers: { "Content-Type": "multipart/form-data" },
  });
};

export const fetchEvent = async (params) => {
  return axios.get("/api/events/organizer/" + params);
};

export const fetchAllEvent = async () => {
  return axios.get("/api/events/");
};

export const fetchEventByUUID = async (id) => {
  return axios.get("/api/events/" + id);
};
