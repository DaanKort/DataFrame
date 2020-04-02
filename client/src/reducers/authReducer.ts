import { IUser } from "../interfaces";

const defaultState: IUser = {
  token: localStorage.getItem("token"),
  email: "",
  firstName: "",
  lastName: "",
  password: "",
  type: "",
  isAuthenticated: false,
  isLoading: false
};

export type AuthState = {};

export const authReducer = (state: AuthState = defaultState, action: IUser) => {
  switch (action.type) {
    case "REQUEST_LOGIN":
      return {
        ...state,
        isLoading: true
      };
    case "REQUEST_LOGIN_SUCCESS":
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
        user: action.payload
      };
    case "RECEIVE_REGISTER":
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        isLoading: false
      };
    case "AUTH_ERROR":
    case "LOGIN_FAIL":
    case "LOGOUT_SUCCESS":
    case "REQUEST_REGISTER_FAILED":
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        user: null,
        isAuthenticated: false,
        isLoading: false
      };
    default:
      return state;
  }
};
