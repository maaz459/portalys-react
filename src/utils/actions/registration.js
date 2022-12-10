import { postUser, getUser, googleLogin } from "../api/registration";
export const addNewUser = async (payload) => {
  try {
    const res = await postUser(payload);
    const data = res.data;
    return {
      ...data,
    };
  } catch (error) {
    console.log(error);
  }
};

export const fetchUser = async (payload) => {
  try {
    const res = await getUser(payload);
    const data = res.data;
    return {
      ...data,
    };
  } catch (error) {
    console.log(error);
  }
};

export const loginWithGoogle = async (payload) => {
  try {
    const res = await googleLogin(payload);
    const data = res.data;
    return {
      ...data,
    };
  } catch (error) {
    console.log(error);
  }
};
