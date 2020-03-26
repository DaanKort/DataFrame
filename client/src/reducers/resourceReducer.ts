import { IResources } from '../interfaces';

const defaultState: IResources = {
  resources: [],
  type: '',
  errorMessage: '',
  isLoading: false
}

export type ResourceState = {}

export const resourceReducer = (
  state: ResourceState = defaultState,
  action: IResources
) => {
  switch (action.type) {
    case 'REQUEST_RESOURCE_DATA':
      return {
        ...state,
        isLoading: true
      };
    case 'RECEIVED_RESOURCE_DATA':
      return {
        ...state,
        isLoading: false,
        resources: action.payload,
      };
    case 'REQUEST_RESOURCE_DATA_FAILED':
      return {
        ...state,
        errorMessage: 'Failed to fetch resources'
      };
    default:
      return state;
  }
}
