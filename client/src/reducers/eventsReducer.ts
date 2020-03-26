import {  IEvents } from '../interfaces';

const defaultState: IEvents = {
  events: [],
  type: '',
  errorMessage: '',
  isLoading: false
}

export type EventsState = {}

export const eventsReducer = (
  state: EventsState = defaultState,
  action: IEvents
) => {
  switch (action.type) {
    case 'REQUEST_EVENTS_DATA':
      return {
        ...state,
        isLoading: true
      };
    case 'RECEIVED_EVENTS_DATA':
      return {
        ...state,
        isLoading: false,
        events: action.payload,
      };
    case 'REQUEST_EVENTS_DATA_FAILED':
      return {
        ...state,
        errorMessage: 'Failed to fetch events'
      };
    default:
      return state;
  }
}
