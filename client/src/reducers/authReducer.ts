import { IUser } from "../interfaces";

const defaultState: IUser = {
  token: localStorage.getItem("token"),
  email: "",
  firstName: "",
  lastName: "",
  password: "",
  type: "",
  isAuthenticated: false,
  isLoading: false,
  loginErrorMessage: '',
  signUpErrorMessage: '',
  loggedIn: false
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
      // window.location.href = '/'
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
        user: action.payload,
        loggedIn: true
      };
    case "REQUEST_REGISTER_SUCCESS":
      window.location.href = '/'
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        isLoading: false,
        loggedIn: true
      };
    case "AUTH_ERROR":
    case "REQUEST_LOGIN_FAILED":
      return {
        ...state,
        token: null,
        user: null,
        isAuthenticated: false,
        isLoading: false,
        loggedIn: false,
        loginErrorMessage: action.payload
      }
    case "LOGOUT_SUCCESS":
      return {
        ...state,
        token: null,
        user: null,
        isAuthenticated: false,
        isLoading: false,
        loggedIn: false,
        signUpErrorMessage: '',
        loginErrorMessage: ''
      }
    case "REQUEST_REGISTER_FAILED":
      return {
        ...state,
        token: null,
        user: null,
        isAuthenticated: false,
        isLoading: false,
        loggedIn: false,
        signUpErrorMessage: action.payload
      };
    default:
      return state;
  }
};
