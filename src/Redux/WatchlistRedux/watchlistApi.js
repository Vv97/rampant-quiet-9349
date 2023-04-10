import axios from "axios"
import { getWatchlistFailed, getWatchlistRequest, getWatchlistSuccess } from "./action"


export const getWatchlist = (token) => (dispatch) => {
    let option = {
        Headers: {

        }
    }
    dispatch(getWatchlistRequest());
    axios.get("https://drab-plum-cricket-tie.cyclic.app/cart", option)
        .then(({ data }) => {
            dispatch(getWatchlistSuccess(data))
        }).catch((err) => {
            dispatch(getWatchlistFailed())
        });

};