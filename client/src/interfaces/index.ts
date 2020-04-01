import { REQUEST_LOGIN } from "../actions/actions";

export interface IWeapons {
  weapons: [];
  type: string;
  isLoading: boolean;
  payload?: any;
  errorMessage: string;
}

export interface IWorldData {
  worldState: [];
  type: string;
  payload?: any;
  errorMessage: string;
  isLoading: boolean;
}

export interface IFrames {
  frames: [];
  type: string;
  isLoading: boolean;
  payload?: any;
  errorMessage: string;
}

export interface INews {
  news: [];
  type: string;
  isLoading: boolean;
  payload?: any;
  errorMessage: string;
}

export interface IMods {
  mods: [];
  type: string;
  isLoading: boolean;
  payload?: any;
  errorMessage: string;
}

export interface IArcanes {
  arcanes: [];
  type: string;
  isLoading: boolean;
  payload?: any;
  errorMessage: string;
}

export interface IResources {
  resources: [];
  type: string;
  isLoading: boolean;
  payload?: any;
  errorMessage: string;
}

export interface ICetusCycle {
  cetusCycle: {};
  type: string;
  isLoading: boolean;
  payload?: any;
  errorMessage: string;
}

export interface IVallisCycle {
  vallisCycle: {};
  type: string;
  isLoading: boolean;
  payload?: any;
  errorMessage: string;
}

export interface IAlerts {
  alerts: [];
  type: string;
  isLoading: boolean;
  payload?: any;
  errorMessage: string;
}

export interface IEvents {
  events: [];
  type: string;
  isLoading: boolean;
  payload?: any;
  errorMessage: string;
}

export interface IDailyDeals {
  deals: [];
  type: string;
  isLoading: boolean;
  payload?: any;
  errorMessage: string;
}

export interface IFissures {
  fissures: [];
  type: string;
  isLoading: boolean;
  payload?: any;
  errorMessage: string;
}

export interface ISorties {
  sorties: {};
  type: string;
  isLoading: boolean;
  payload?: any;
  errorMessage: string;
}

export interface IInvasions {
  invasions: [];
  type: string;
  isLoading: boolean;
  payload?: any;
  errorMessage: string;
}

export interface IUser {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  isAuthenticated: boolean;
  payload?: any;
  isLoading: false;
  type: string;
  token: string | null;
}

export interface IAction {
  type: typeof REQUEST_LOGIN,
  payload: IUser;
}

export interface IError {
  type: string | null;
  payload?: any;
  message: {};
  id: number | null;
  status: number | null;
}
