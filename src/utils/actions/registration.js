import secrets from "../../secrets.json";
import {
  postUser,
  getUser,
  googleLogin,
  forgotPassword,
  resetPassword,
  fetchUserData as getUserData,
} from "../api/registration";
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

export const sendForgotEmail = async (payload) => {
  try {
    const res = await forgotPassword({ ...payload, link: secrets.resetLink });
    const data = res.data;
    return {
      ...data,
    };
  } catch (error) {
    console.log(error);
  }
};

export const changePassword = async (payload) => {
  try {
    const res = await resetPassword(payload);
    const data = res.data;
    return {
      ...data,
    };
  } catch (error) {
    console.log(error);
  }
};

export const fetchUserData = async (token) => {
  try {
    const res = await getUserData(token);
    const data = res.data;
    return {
      ...data,
    };
  } catch (error) {
    console.log(error);
  }
};
