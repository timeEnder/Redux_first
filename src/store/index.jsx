import {combineReducers, createStore} from "redux";
import {reducer} from './ThemerReducer';

const rootReducer = combineReducers({
    theme : reducer
})

export const store = createStore(rootReducer)