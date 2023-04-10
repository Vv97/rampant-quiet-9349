import * as types from "./actionType";

const intialWatchList = {
    watchlist: [],
    isLoading: false,
    isError: false,
}

export const reducer = (state = intialWatchList, { type, payload }) => {
    switch (type) {
        case types.GET_WATCHLIST_REQUEST:
            return { ...state, isLoading: true, isError: false };
        case types.GET_WATCHLIST_SUCCESS:
            return { ...state, isLoading: false, watchlist: payload };
        case types.GET_WATCHLIST_FAILED:
            return { ...state, isLoading: false, isError: true }
        default:
            return state
    }
}