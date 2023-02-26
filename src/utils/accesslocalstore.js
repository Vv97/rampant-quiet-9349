import axios from "axios";
import {
  loginSucessAction,
  postFailAction,
  postRequestAction,
  postSucessAction,
} from "../Redux/Registerdata/action";

export const getLocalData = (key) => {
  try {
    let temp = JSON.parse(localStorage.getItem(key));
    return temp;
  } catch (e) {
    return undefined;
  }
};

export const setLocalDate = (key, data) => {
  return localStorage.setItem(key, JSON.stringify(data));
};

export const Registerdata = (data) => (dispatch) => {
  dispatch(postRequestAction());

  axios
    .post(`https://63f8b80a1dc21d5465c55f0f.mockapi.io/register`, data)
    .then((res) => dispatch(postSucessAction(res.data)))
    .catch((err) => dispatch(postFailAction()));
};

export const logindata = (dispatch) => {
  dispatch(postRequestAction());
  return axios
    .get("https://63f8b80a1dc21d5465c55f0f.mockapi.io/register")
    .then((res) => dispatch(loginSucessAction(res.data)))
    .catch((err) => dispatch(postFailAction()));
};

export const logoutdata = (dispatch) => {
  dispatch(logoutdata());
};
