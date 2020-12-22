import { applyMiddleware, createStore } from "redux";
import Thunk from "redux-thunk";
import rootReducer from "./reducers";   // imports reducers/index.js

export default createStore( rootReducer, applyMiddleware(Thunk) );
