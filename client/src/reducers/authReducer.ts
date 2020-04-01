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
    case "RECIEVE_LOGIN":
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
        user: action.payload
      };
    case "LOGIN_SUCCESS":
    case "RECEIVE_REGISTER":
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
