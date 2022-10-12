import { atom } from "recoil";

export const loginData = atom({
  key: "loginData",
  default: [
    {
      id: 1,
      user: "",
      password: "",
      password_confirmation: "",
      email: "",
      token: "",
    },
  ],
});
