import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();
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
  effects_UNSTABLE: [persistAtom],
});

export const loginAttemp = atom({
  key: "loginAttemp",
  default: {
    email: "admin@montedelgallo.com",
    password: "admin",
  },
});

export const currentTab = atom({
  key: "currentTab",
  default: "home",
});
