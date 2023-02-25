import { LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCESS, LOGOUT_SUCESS, POST_REGISTER_FAIL, POST_REGISTER_REQUEST, POST_REGISTER_SUCESS } from "./actionType"

export const postRequestAction = () => {
    return {type: POST_REGISTER_REQUEST }
}

export const postSucessAction = (payload) => {
    return {type: POST_REGISTER_SUCESS, payload }
}

export const postFailAction = () => {
    return {type: POST_REGISTER_FAIL }
}

export const loginRequestAction = () => {
    return {type: LOGIN_REQUEST }
}

export const loginSucessAction = (payload) => {
    return {type: LOGIN_SUCESS, payload }
}

export const loginFailAction = () => {
    return {type: LOGIN_FAIL }
}

export const logoutSucessAction = () => {
    return {type: LOGOUT_SUCESS }
}

