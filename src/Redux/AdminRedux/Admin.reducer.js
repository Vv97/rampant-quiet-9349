import * as types from "./Admin.actionType";

let initialState = {
    loading: false,
    error: false,
    //totalPages: 0,
    adminProducts : [],
}

export const AdminReducer = (state = initialState, {type,payload}) => {
    switch(type){
        case types.GET_ADMIN_PRODUCTS_LOADING: {
            return {
                ...state,
                loading: true,
                error: false
            }
        }

        case types.GET_ADMIN_PRODUCTS_SUCCESS: {
            return {
                ...state,
                loading: false,
                error: false,
                adminProducts: payload
            }
        }

        case type.GET_ADMIN_PRODUCTS_FAILURE: return {
            ...state,
            loading: false,
            error: true
        }

        case type.POST_ADMIN_PRODUCTS_LOADING: return {
            ...state,
            loading: true,
            error: false
        }

        case type.POST_ADMIN_PRODUCTS_SUCCESS: return {
            ...state,
            loading: false,
            adminProducts: [...state.adminProducts, payload]
        }

        case type.POST_ADMIN_PRODUCTS_FAILURE: return {
            ...state,
            loading: false,
            error: true
        }

        default: {
            return state;
        }
    }
}