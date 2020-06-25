import { IError } from "../interfaces";

const defaultState: IError = {
  message: '',
  type: ''
};

export type ErrorState = {};

export const errorReducer = (
  state: ErrorState = defaultState,
  action: IError
) => {
  switch (action.type) {
    case "GET_LOGIN_ERRORS":
      return {
        loginErrorMessage: action.payload
      };
    case "GET_SIGNUP_ERRORS":
      return {
        signUpErrorMessage: action.payload
      };
    case "CLEAR_ERROR":
      return {
        message: '',
      };
    default:
      return state;
  }
};
