import { IFissuresState } from '../interfaces';

const defaultState: IFissuresState = {
  fissures: [],
  type: '',
  errorMessage: '',
  isLoading: false
}

export type FissureState = {}

export const fissuresReducer = (
  state: FissureState = defaultState,
  action: IFissuresState
) => {
  switch (action.type) {
    case 'REQUEST_FISSURE_DATA':
      return {
        ...state,
        isLoading: true
      };
    case 'RECEIVED_FISSURE_DATA':
      return {
        ...state,
        isLoading: false,
        fissures: action.payload,
      };
    case 'REQUEST_FISSURES_DATA_FAILED':
      return {
        ...state,
        errorMessage: 'Failed to fetch fissures'
      };
    default:
      return state;
  }
}
