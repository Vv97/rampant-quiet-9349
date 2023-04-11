import { getLocalData, setLocalDate } from "../../utils/accesslocalstore";
import {
  AUTHLOGIN_SUCESS,
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCESS,
  LOGOUT_SUCESS,
  POST_REGISTER_FAIL,
  POST_REGISTER_REQUEST,
  POST_REGISTER_SUCESS,
  POST_ADMINREGISTER_SUCESS,
  ADMINLOGIN_SUCESS
} from "./actionType";

const initstate = {
  isLoading: false,
  register: [],
  admin: [],
  isError: false,
  isAuth: getLocalData("isAuth") || false,
};

export const registerReducer = (state = initstate, { type, payload }) => {
  switch (type) {
    case POST_REGISTER_REQUEST:
      return { ...state, isLoading: true };

    case POST_REGISTER_SUCESS:
      return {
        ...state,
        isLoading: false,
        register: [...state.register, payload],
      };
    case POST_ADMINREGISTER_SUCESS:
      return {
        ...state,
        isLoading: false,
        admin: [...state.admin, payload],
      };

    case POST_REGISTER_FAIL:
      return { ...state, isLoading: false, isError: true };

    case LOGIN_REQUEST:
      return { ...state, isLoading: true };

    case LOGIN_SUCESS:
      return { ...state, isLoading: false, register: payload };

    case ADMINLOGIN_SUCESS:
      return { ...state, isLoading: false, admin: payload };

    case LOGIN_FAIL:
      return { ...state, isLoading: false, isError: true };

    case LOGOUT_SUCESS:
      setLocalDate("isAuth", false)
      localStorage.removeItem("token");
      localStorage.removeItem("userdata");
      return { ...state, isLoading: false, isAuth: false };

    case AUTHLOGIN_SUCESS:
      setLocalDate("isAuth", true)
      return { ...state, isAuth: true };



    default:
      return state;
  }
};
