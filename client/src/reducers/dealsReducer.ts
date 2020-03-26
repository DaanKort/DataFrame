import { IDailyDeals } from '../interfaces';

const defaultState: IDailyDeals = {
  deals: [],
  type: '',
  errorMessage: '',
  isLoading: false
}

export type DealsState = {}

export const dealsReducer = (
  state: DealsState = defaultState,
  action: IDailyDeals
) => {
  switch (action.type) {
    case 'REQUEST_DEALS_DATA':
      return {
        ...state,
        isLoading: true
      };
    case 'RECEIVED_DEALS_DATA':
      return {
        ...state,
        isLoading: false,
        deals: action.payload,
      };
    case 'REQUEST_DEALS_DATA_FAILED':
      return {
        ...state,
        errorMessage: 'Failed to fetch deals'
      };
    default:
      return state;
  }
}
