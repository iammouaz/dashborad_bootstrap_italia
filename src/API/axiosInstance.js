import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { loginAttemp, loginData } from "Recoil/Atoms";

var MockAdapter = require("axios-mock-adapter");

const axiosClient = axios.create();

export const useAxiosInstance = () => {
  const [lognInfo] = useRecoilState(loginData);
  const [loginA] = useRecoilState(loginAttemp);

  const navigate = useNavigate();

  const { REACT_APP_API_BASE_URL } = process.env;

  axiosClient.defaults.baseURL = REACT_APP_API_BASE_URL;

  axiosClient.defaults.headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
  };

  axiosClient.interceptors.response.use(
    (response) =>
      // Dispatch any action on success
      response,
    (error) => {
      return Promise.reject(error);
    }
  );

  axiosClient.interceptors.request.use((config) => {
    const token = Cookies.get("token");
    config.headers.Authorization = token ? `Bearer ${token}` : "";
    return config;
  });

  var mock = new MockAdapter(axiosClient);

  mock.onGet("/login").reply(function () {
    return new Promise(function (resolve, reject) {
      const isMatched = lognInfo.filter(
        (item) =>
          item.email === loginA.email && item.password === loginA.password
      );
      setTimeout(function () {
        if (isMatched.length !== 0) {
          resolve([200, isMatched]);
        } else {
          resolve([500, { success: false }]);
        }
      }, 1000);
    });
  });

  mock.onGet("/register").reply(function () {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        resolve([200, { success: true }]);
      }, 1000);
    });
  });

  return { axiosClient };
};
