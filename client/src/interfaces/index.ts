import { REQUEST_LOGIN } from "../actions/actions";

interface Base {
  type: string;
  payload?: any;
  isLoading: boolean;
  loginErrorMessage?: string
  signUpErrorMessage?: string
  errorMessage?: string
}
export interface IWeapons extends Base {
  weapons: [];
}

export interface IWorldData extends Base {
  worldState: [];
}

export interface IFrames extends Base {
  frames: [];
}

export interface INews extends Base {
  news: [];
}

export interface IMods extends Base {
  mods: [];
}

export interface IArcanes extends Base {
  arcanes: [];
}

export interface IResources extends Base {
  resources: [];
}

export interface ICetusCycle extends Base {
  cetusCycle: {};
}

export interface IVallisCycle extends Base {
  vallisCycle: {};
}

export interface IAlerts extends Base {
  alerts: [];
}

export interface IEvents extends Base {
  events: [];
}

export interface IDailyDeals extends Base {
  deals: [];

}
export interface IFissures extends Base {
  fissures: [];
}

export interface ISorties extends Base {
  sorties: {};
}

export interface IInvasions extends Base {
  invasions: [];
}
export interface IUser extends Base {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  isAuthenticated: boolean;
  token: string | null;
  loggedIn: boolean;
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
