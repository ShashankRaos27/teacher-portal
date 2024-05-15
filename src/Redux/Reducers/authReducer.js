import { LOGIN, LOGOUT } from "../Actions/UserAction";

const initialState = {
  loggedIn: false,
  user: null,
};

const authReducer = (state = initialState, action) => {
  
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        loggedIn: true,
        user: {
          userDetails: action.payload.userDetails,
        },
      };
    case LOGOUT:
      return {
        ...state,
        loggedIn: false,
        user: null,
      };
    default:
      return state;
  }
};

export default authReducer;
