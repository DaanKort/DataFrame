import { IFrames } from '../interfaces';

const defaultState: IFrames = {
  frames: [],
  type: '',
  errorMessage: '',
  isLoading: false
}

export type FrameState = {}

export const frameReducer = (
  state: FrameState = defaultState,
  action: IFrames
) => {
  switch (action.type) {
    case 'REQUEST_FRAME_DATA':
      return {
        ...state,
        isLoading: true,
      };
    case 'RECEIVED_FRAME_DATA':
      return {
        ...state,
        isLoading: false,
        frames: action.payload,
      };
    case 'REQUEST_FRAME_DATA_FAILED':
      return {
        ...state,
        errorMessage: 'Failed to fetch frames'
      };
    default:
      return state;
  }
}
