import { IInvasionsState } from '../interfaces';

const defaultState: IInvasionsState = {
  invasions: [],
  type: '',
  errorMessage: '',
  isLoading: false
}

export type InvasionsState = {}

export const invasionsReducer =  (
    state: InvasionsState = defaultState,
    action: IInvasionsState
) => {
    switch (action.type) {
      case 'REQUEST_INVASIONS_DATA':
        return {
          ...state,
          isLoading: true
        };
      case 'RECEIVED_INVASIONS_DATA':
        return {
          ...state,
          isLoading: false,
          invasions: action.payload,
        };
      case 'REQUEST_INVASIONS_DATA_FAILED':
        return {
          ...state,
          errorMessage: 'Failed to fetch invasions'
        };
      default:
        return state;
    }
}

