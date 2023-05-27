import axios from "axios"
import { getWatchlistFailed, getWatchlistRequest, getWatchlistSuccess } from "./action"
import { getCartApi } from "../CartRedux/cart.action";


export const getWatchlist = (token) => (dispatch) => {
    let option = {
        Headers: {

        }
    }
    dispatch(getWatchlistRequest());
    axios.get("https://drab-plum-cricket-tie.cyclic.app/wish", option)
        .then(({ data }) => {
            dispatch(getWatchlistSuccess(data))
        }).catch((err) => {
            dispatch(getWatchlistFailed())
        });

};


export const addwatchlist = (data) => (dispatch) => {

    let obj = {
        title: data.title,
        discounted_price: +data.discounted_price,
        price: +data.strike_price,
        discount: data.discount,
        image: data.images[0]
    }


    axios.post("https://drab-plum-cricket-tie.cyclic.app/wish/add", obj)
        .then(() => {
            return true
        }).catch((err) => {
            return false
        })
};



export const addtoc = (data) => (dispatch) => {
    console.log(data)
    axios.post("https://drab-plum-cricket-tie.cyclic.app/cart/add", data).then(res => {
        dispatch(getCartApi());
        return true;
    }).catch((err) => {
        return false;
    })
}

export const deleteProduct = (id) => (dispatch) => {
    axios.delete(`https://drab-plum-cricket-tie.cyclic.app/wish/delete/${id}`).then(res => {
        dispatch(getWatchlist())
    }).catch(err => {
        console.log(err)
    })
}