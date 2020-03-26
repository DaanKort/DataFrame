import { IAlerts } from '../interfaces';

const defaultState: IAlerts = {
  alerts: [],
  type: '',
  errorMessage: '',
  isLoading: false
}

export type AlertsState = {}

export const alertsReducer = (
  state: AlertsState = defaultState,
  action: IAlerts
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
