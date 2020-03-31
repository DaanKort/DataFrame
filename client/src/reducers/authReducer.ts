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

    case "RECIEVE_LOGIN":

    case "RECIEVE_LOGIN_ERROR":

    default:
      return state;
  }
};
