import { IAlertsState } from '../interfaces';

const defaultState: IAlertsState = {
  alerts: [],
  type: '',
  errorMessage: '',
  isLoading: false,
  node: '',
  faction: ''
}

export type AlertsState = {}

export const alertsReducer = (
  state: AlertsState = defaultState,
  action: IAlertsState
) => {
  switch (action.type) {
    case 'REQUEST_ALERTS_DATA':
      return {
        ...state,
        isLoading: true
      };
    case 'RECEIVED_ALERTS_DATA':
      return {
        ...state,
        isLoading: false,
        alerts: action.payload,
      };
    case 'REQUEST_ALERTS_DATA_FAILED':
      return {
        ...state,
        errorMessage: 'Failed to fetch alerts'
      };
    default:
      return state;
  }
}
