import { IArcanes } from '../interfaces';

const defaultState: IArcanes = {
  arcanes: [],
  type: '',
  errorMessage: '',
  isLoading: false
}

export type ArcaneState = {}

export const arcaneReducer = (
  state: ArcaneState = defaultState,
  action: IArcanes
) => {
  switch (action.type) {
    case 'REQUEST_ARCANE_DATA':
      return {
        ...state,
        isLoading: true
      };
    case 'RECEIVED_ARCANE_DATA':
      return {
        ...state,
        isLoading: false,
        arcanes: action.payload,
      };
    case 'REQUEST_ARCANE_DATA_FAILED':
      return {
        ...state,
        errorMessage: 'Failed to fetch arcanes'
      };
    default:
      return state;
  }
}
