import * as types from "./Admin.actionType";

// For Get Method
export const getAdminProductsRequest = () => {
    return { type: types.GET_ADMIN_PRODUCTS_LOADING}
}

export const getAdminProductsSuccess = (payload) => {
    return { type: types.GET_ADMIN_PRODUCTS_SUCCESS, payload}
}

export const getAdminProductsFailure = () => {
    return { type: types.GET_ADMIN_PRODUCTS_FAILURE}
}

//For POST Method

export const postAdminProductsRequest = () => {
    return { type: types.POST_ADMIN_PRODUCTS_LOADING}
}

export const postAdminProductsSuccess = () => {
    return { type: types.POST_ADMIN_PRODUCTS_SUCCESS}
}

export const postAdminProductsFailure = () => {
    return { type: types.POST_ADMIN_PRODUCTS_FAILURE}
}

