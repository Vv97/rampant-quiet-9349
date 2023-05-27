import { getAdminProductsFailure, getAdminProductsRequest, getAdminProductsSuccess } from "./Admin.action"
import axios from "axios";

export const getAdminProducts = (dispatch) => {
    dispatch(getAdminProductsRequest());

    axios.get('#get_url')
    .then((res) => {
        dispatch(getAdminProductsSuccess(res.data))
    })
    .catch((err) => {
        console.log(err);
        dispatch(getAdminProductsFailure())
    })
}

export const postAdminProducts = (data) => (dispatch) => {
    dispatch()
}