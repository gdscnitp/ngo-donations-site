import { applyMiddleware, createStore } from "redux";
import Thunk from "redux-thunk";
import rootReducer from "./reducers"; // imports reducers/index.js
import { composeWithDevTools } from "redux-devtools-extension";

export default createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(Thunk))
);
