import { IError } from "../interfaces";

const defaultState: IError = {
  message: {},
  status: null,
  id: null,
  type: ""
};

export type ErrorState = {};

export const errorReducer = (
  state: ErrorState = defaultState,
  action: IError
) => {
  switch (action.type) {
    case "GET_ERROR":
      return {
        message: action.payload.message,
        status: action.payload.status,
        id: action.payload.id
      };
    case "CLEAR_ERROR":
      return {
        message: {},
        status: null,
        id: null
      };
    default:
      return state;
  }
};
