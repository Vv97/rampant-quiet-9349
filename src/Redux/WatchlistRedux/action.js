import * as types from "./actionType";

export const getWatchlistRequest = () => {
    return { type: types.GET_WATCHLIST_REQUEST }
};

export const getWatchlistSuccess = (payload) => {
    return { type: types.GET_WATCHLIST_SUCCESS, payload }
};

export const getWatchlistFailed = () => {
    return { type: types.GET_WATCHLIST_FAILED }
};