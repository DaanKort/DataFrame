import { ICetusCycle } from './../interfaces/index';

const defaultState: ICetusCycle = {
  cetusCycle: {},
  type: '',
  errorMessage: '',
  isLoading: false
}

export type CetusCycleState = {}

export const cetusCycleReducer = (
  state: CetusCycleState = defaultState,
  action: ICetusCycle
) => {
  switch (action.type) {
    case 'REQUEST_CETUS_CYCLE_DATA':
      return {
        ...state,
        isLoading: true
      };
    case 'RECEIVED_CETUS_CYCLE_DATA':
      return {
        ...state,
        isLoading: false,
        cetusCycle: action.payload,
      };
    case 'REQUEST_CETUS_CYCLE_DATA_FAILED':
      return {
        ...state,
        errorMessage: 'Failed to fetch cetus cycle'
      };
    default:
      return state;
  }
}
