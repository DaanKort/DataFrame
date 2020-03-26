import { IMods } from '../interfaces';

const defaultState: IMods = {
  mods: [],
  type: '',
  errorMessage: '',
  isLoading: false
}

export type ModsState = {}

export const modsReducer =  (
    state: ModsState = defaultState,
    action: IMods
) => {
    switch (action.type) {
      case 'REQUEST_MOD_DATA':
        return {
          ...state,
          isLoading: true
        };
      case 'RECEIVED_MOD_DATA':
        return {
          ...state,
          isLoading: false,
          mods: action.payload,
        };
      case 'REQUEST_MOD_DATA_FAILED':
        return {
          ...state,
          errorMessage: 'Gaat nie goed he'
        };
      default:
        return state;
    }
}

