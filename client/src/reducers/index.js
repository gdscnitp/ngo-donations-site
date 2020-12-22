import { combineReducers } from "redux";
import UserReducer from "./user_reducer";  // more reducers maybe added later

export default combineReducers({user: UserReducer});
