import { atom } from "recoil";

export const loginData = atom({
  key: "loginData",
  default: [
    {
      id: 1,
      user: "admin",
      password: "admin",
      password_confirmation: "admin",
      email: "admin@montedelgallo.com",
      token: "1",
    },
  ],
});

export const loginAttemp = atom({
  key: "loginAttemp",
  default: {
    email: "admin@montedelgallo.com",
    password: "admin",
  },
});
