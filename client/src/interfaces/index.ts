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

export interface INewsState extends Base {
  news: [];
  imageLink: string,
  message: string;
  link: string;
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

export interface IAlertsState extends Base {
  alerts: [];
  node: string;
  faction: string;
  tag: string;
  mission: {
    node: string;
    faction: string;
    description: string;
  };

}

export interface IEvents extends Base {
  events: [];
}

export interface IDailyDeals extends Base {
  deals: [];

}
export interface IFissuresState extends Base {
  fissures: [];
  tier: string;
  tierNum: string;
  node: string;
  missionType: string;
  enemy: string;
  fissureEnemy: string;
  eta: string;
}

export interface ISorties extends Base {
  sorties: {};
}

// export interface IInvasions extends Base {
//   invasions: [];
// }
export interface IUser extends Base {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  displayName: string;
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
export interface IInvasions {
  node: string,
  desc: string,
  eta: string
}

export interface IInvasionsState {
  invasions: [],
  type: string,
  isLoading: boolean,
  payload?: any,
  errorMessage: string
}
