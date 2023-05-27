import axios from "axios";
import {
  AdminloginSucessAction,
  loginSucessAction,
  postAdminRequestAction,
  postFailAction,
  postRequestAction,
  postSucessAction,
} from "../Redux/Registerdata/action";
// import bcrypt from "bcryptjs-react"

export const getLocalData = (key) => {
  try {
    let temp = JSON.parse(localStorage.getItem(key));
    return temp;
  } catch (e) {
    return undefined;
  }
};

export const getLocalAdminData = (key) => {
  try {
    let temp = JSON.parse(localStorage.getItem(key));
    return temp;
  } catch (error) {
    return undefined;
  }
};

export const setLocalDate = (key, data) => {
  return localStorage.setItem(key, data);
};

export const setAdminLocalDate = (key, data) => {
  return localStorage.setItem(key, data);
};

// Registerdata PROCESS

export const Registerdata = (data) => (dispatch) => {
 
  dispatch(postRequestAction());

  const { Firstname, Lastname, Email, Password, Type } = data;
 


  // bcrypt.hash(Password, 5, (err, hash) => {
  //   const newdata = {Firstname, Lastname, Email, Password:hash, Type}
  //https://63f8b80a1dc21d5465c55f0f.mockapi.io/admin

  // )}

  if (Type === "user") {
    axios
      .post(`https://fair-pink-millipede-gear.cyclic.app/user/register`, data)
      .then((res) => {
        console.log(res);
        dispatch(postSucessAction(res.data));
      })
      .catch((err) => {
        console.log(err);
        dispatch(postFailAction());
      });
  } else {
    axios
      .post(`https://fair-pink-millipede-gear.cyclic.app/admin/register`, data)
      .then((res) => {
        console.log(res);
        dispatch(postAdminRequestAction(res.data));
      })
      .catch((err) => {
        console.log(err);
        dispatch(postFailAction());
      });
  }
};

export const logindata = (payload) => (dispatch) => {
  dispatch(postRequestAction());

  axios.post("https://fair-pink-millipede-gear.cyclic.app/user/login", payload)
    .then((res) => {
      console.log(res.data)
      dispatch(loginSucessAction(res.data));
    })
    .catch((err) => {
      console.log("user/login", err)
      dispatch(postFailAction())
    });
};

export const adminlogindata = (payload) => (dispatch) => {
  dispatch(postRequestAction());

  axios.post("https://fair-pink-millipede-gear.cyclic.app/admin/login", payload)
    .then((res) => {
      dispatch(AdminloginSucessAction(res.data));
    })
    .catch((err) => dispatch(postFailAction()));
};

export const logoutdata = (dispatch) => {
  dispatch(logoutdata());
};
