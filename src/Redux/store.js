import { createStore, combineReducers } from "redux";
import authReducer from "./Reducers/authReducer";
import studentReducer from "./Reducers/StudentReducer";
import { composeWithDevTools } from "redux-devtools-extension";

// Combine authReducer and studentReducer into a root reducer
const rootReducer = combineReducers({
  auth: authReducer,
  student: studentReducer,
});

// Create the Redux store with the root reducer
const store = createStore(rootReducer, composeWithDevTools());

export default store;

