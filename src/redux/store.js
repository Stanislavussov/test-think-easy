import {combineReducers, createStore} from "redux";
import inputReducer from "../component/inputReducer";

let reducers = combineReducers({
    inputPage: inputReducer
});

let store = createStore(reducers);

export default store;