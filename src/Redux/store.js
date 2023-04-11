import { legacy_createStore, applyMiddleware, compose, combineReducers } from "redux"

import thunk from "redux-thunk"

import { mensProductReducer } from "./Product/Product.reducer"
import { registerReducer } from "./Registerdata/registerReducer"
import { reducer as cartReducer } from "./CartRedux/cart.reducer"
import { reducer as watchlistreducer } from "./WatchlistRedux/reducer"

const rootReducer = combineReducers({
    mens: mensProductReducer,
    registerReducer,
    cartReducer,
    watchlistreducer


})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = legacy_createStore(rootReducer, composeEnhancer(applyMiddleware(thunk))) 