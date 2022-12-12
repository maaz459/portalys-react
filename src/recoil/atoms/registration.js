import { atom } from "recoil";

export const RegistraionModalTypes = {
  LOGIN: "LOGIN",
  SIGNUP: "SIGNUP",
  FORGOT: "FORGOT",
  PASSWORD: "PASSWORD",
  RESET_PASSWORD: "RESET_PASSWORD",
};

export const registration = atom({
  key: "registration",
  default: {
    openModal: false,
    modalType: "",
    userRole: "",
    userData: {},
  },
});
