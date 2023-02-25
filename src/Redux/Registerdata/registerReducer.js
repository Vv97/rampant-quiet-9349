import { LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCESS, LOGOUT_SUCESS, POST_REGISTER_FAIL, POST_REGISTER_REQUEST, POST_REGISTER_SUCESS } from "./actionType";

const initstate = {
    isLoading: false,
    register: [],
    isError: false,
    isAuth: false
}

export const registerReducer = ( state = initstate, {type, payload} ) => {
    switch(type) {

        case POST_REGISTER_REQUEST: return {...state, isLoading: true };

        case POST_REGISTER_SUCESS: return {...state, isLoading: false, register: [...state.register, payload] };

        case POST_REGISTER_FAIL: return {...state, isLoading: false, isError: true };


        case LOGIN_REQUEST : return {...state, isLoading: true };
        
        case LOGIN_SUCESS : return {...state, isLoading: false, isAuth: true, register: payload };

        case LOGIN_FAIL : return {...state, isLoading: false, isError: true };

        case LOGOUT_SUCESS : return {...state, isLoading: false, isAuth: false }

        
        default: return state;
    }
}