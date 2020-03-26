import { IVallisCycle } from '../interfaces/index';

const defaultState: IVallisCycle = {
  vallisCycle: {},
  type: '',
  errorMessage: '',
  isLoading: false
}

export type VallisCycleState = {}

export const vallisCycleReducer = (
  state: VallisCycleState = defaultState,
  action: IVallisCycle
) => {
  switch (action.type) {
    case 'REQUEST_VALLIS_CYCLE_DATA':
      return {
        ...state,
        isLoading: true
      };
    case 'RECEIVED_VALLIS_CYCLE_DATA':
      return {
        ...state,
        isLoading: false,
        vallisCycle: action.payload,
      };
    case 'REQUEST_VALLIS_CYCLE_DATA_FAILED':
      return {
        ...state,
        errorMessage: 'Failed to fetch orb vallis cycle'
      };
    default:
      return state;
  }
}
