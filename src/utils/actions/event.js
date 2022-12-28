import { addEvent, fetchAllEvent, fetchEvent, fetchEventByUUID } from "../api/events";
export const postEvent = async (payload) => {
  try {
    const res = await addEvent(payload);
    const data = res.data;
    return {
      ...data,
    };
  } catch (error) {
    console.log(error);
  }
};

export const getEvents = async (params) => {
  try {
    const res = await fetchEvent(params);
    const data = res.data;
    return {
      ...data,
    };
  } catch (error) {
    console.log(error);
  }
};

export const getAllEvents = async (parms) => {
  try {
    const res = await fetchAllEvent();
    const data = res.data;
    return {
      ...data,
    };
  } catch (error) {
    console.log(error);
  }
};

export const getEventsByUUID = async (id) => {
  try {
    const res = await fetchEventByUUID(id);
    const data = res.data;
    return {
      ...data,
    };
  } catch (error) {
    console.log(error);
  }
};
