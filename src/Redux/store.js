import {legacy_createStore , applyMiddleware ,compose , combineReducers} from "redux"

import thunk from "redux-thunk"

import { mensProductReducer } from "./Product/Product.reducer"


const rootReducer = combineReducers({
    mens: mensProductReducer,

})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = legacy_createStore(rootReducer , composeEnhancer(applyMiddleware(thunk))) 
