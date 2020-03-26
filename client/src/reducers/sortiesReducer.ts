import { ISorties } from '../interfaces';

const defaultState: ISorties = {
  sorties: {},
  type: '',
  errorMessage: '',
  isLoading: false
}

export type SortieState = {}

export const sortieReducer = (
  state: SortieState = defaultState,
  action: ISorties
) => {
  switch (action.type) {
    case 'REQUEST_SORTIE_DATA':
      return {
        ...state,
        isLoading: true
      };
    case 'RECEIVED_SORTIE_DATA':
      return {
        ...state,
        isLoading: false,
        sorties: action.payload,
      };
    case 'REQUEST_SORTIE_DATA_FAILED':
      return {
        ...state,
        errorMessage: 'Failed to fetch sorties'
      };
    default:
      return state;
  }
}
