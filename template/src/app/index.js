import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

import rootReducer from "../features";

export default createStore(
    combineReducers(rootReducer),
    applyMiddleware(thunk)
);
