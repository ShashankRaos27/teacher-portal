export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";

export const login = (userDetails) => ({
  type: LOGIN,
  payload: { userDetails },
});

export const logout = () => ({
  type: LOGOUT,
});

