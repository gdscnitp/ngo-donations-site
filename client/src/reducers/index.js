import { combineReducers } from "redux";
import AuthReducer from "./auth"; // more reducers maybe added later

export default combineReducers({ auth: AuthReducer });
