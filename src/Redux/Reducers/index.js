// reducers/index.js
import { combineReducers } from "redux";
import authReducer from "./authReducer";
import studentReducer from "./StudentReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  student: studentReducer,
});

export default rootReducer;
