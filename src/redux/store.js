import {applyMiddleware, combineReducers, createStore} from "redux";
import inputReducer from "./reducers/inputReducer";
import {composeWithDevTools} from "redux-devtools-extension/developmentOnly";
import thunk from "redux-thunk";


let reducers = combineReducers({
    inputPage: inputReducer
});

let store = createStore(
    reducers,
    composeWithDevTools(
        applyMiddleware(thunk),
    ));



export default store;