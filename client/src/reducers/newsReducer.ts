import { INews } from '../interfaces';

const defaultState: INews = {
  news: [],
  type: '',
  errorMessage: '',
  isLoading: false
}

export type NewsState = {}

export const newsReducer =  (
    state: NewsState = defaultState,
    action: INews
) => {
    switch (action.type) {
      case 'REQUEST_NEWS_DATA':
        return {
          ...state,
          isLoading: true
        };
      case 'RECEIVED_NEWS_DATA':
        return {
          ...state,
          isLoading: false,
          news: action.payload,
        };
      case 'REQUEST_NEWS_DATA_FAILED':
        return {
          ...state,
          errorMessage: 'Gaat nie goed he'
        };
      default:
        return state;
    }
}

