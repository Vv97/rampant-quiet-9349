import axios from "axios";
import {
  AdminloginSucessAction,
  loginSucessAction,
  postAdminRequestAction,
  postFailAction,
  postRequestAction,
  postSucessAction,
} from "../Redux/Registerdata/action";
import bcrypt from "bcryptjs-react"


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

// Registerdata PROCESS

export const Registerdata = (data) => (dispatch) => {
  dispatch(postRequestAction());

  const {Firstname, Lastname, Email, Password, Type } = data
  console.log(Firstname, Lastname, Email, Password, Type)

  // bcrypt.hash(Password, 5, (err, hash) => {
  //   const newdata = {Firstname, Lastname, Email, Password:hash, Type}
  //https://63f8b80a1dc21d5465c55f0f.mockapi.io/admin

  // )}

    if(Type === "user"){
      axios.post(`https://63f8b80a1dc21d5465c55f0f.mockapi.io/register`, data)
    .then((res) => {
      console.log(res)
     dispatch(postSucessAction(res.data))
    })
    .catch((err) => dispatch(postFailAction()));
    }
    else {
      axios.post(`https://63f8b80a1dc21d5465c55f0f.mockapi.io/admin`, data)
    .then((res) => {
      console.log(res)
     dispatch(postAdminRequestAction(res.data))
    })
    .catch((err) => dispatch(postFailAction()));

    }

    

};


export const logindata = (dispatch) => {
  dispatch(postRequestAction());
  return axios
    .get("https://63f8b80a1dc21d5465c55f0f.mockapi.io/register")
    .then((res) => dispatch(loginSucessAction(res.data)))
    .catch((err) => dispatch(postFailAction()));
};

export const adminlogindata = (dispatch) => {
  dispatch(postRequestAction());
  return axios
    .get("https://63f8b80a1dc21d5465c55f0f.mockapi.io/admin")
    .then((res) => dispatch(AdminloginSucessAction(res.data)))
    .catch((err) => dispatch(postFailAction()));
};




export const logoutdata = (dispatch) => {
  dispatch(logoutdata());
};
