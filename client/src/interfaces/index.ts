export interface IWeapons {
  weapons: [],
  type: string,
  isLoading: boolean,
  payload?: any,
  errorMessage: string
}

export interface IWorldData {
  worldState: [],
  type: string,
  payload?: any
  errorMessage: string,
  isLoading: boolean
}

export interface IFrames {
  [x: string]: any;
  frames: []
  type: string,
  isLoading: boolean,
  payload?: any,
  errorMessage: string,
}

export interface IFramesProps {
  name: string;
  wikiaThumbnail: string;
  id: number;
  description: string;
  health: number;
  shield: number;
  abilities: any
}

export interface INews {
  message: string,
  link: string,
  imageLink: string
}

export interface INewsState {
  news: [],
  type: string,
  isLoading: boolean,
  payload?: any,
  errorMessage: string
}

export interface IMods {
  mods: [],
  type: string,
  isLoading: boolean,
  payload?: any,
  errorMessage: string
}

export interface IArcanes {
  arcanes: [],
  type: string,
  isLoading: boolean,
  payload?: any,
  errorMessage: string
}

export interface IResources {
  resources: [],
  type: string,
  isLoading: boolean,
  payload?: any,
  errorMessage: string
}

export interface ICetusCycle {
  cetusCycle: {},
  type: string,
  isLoading: boolean,
  payload?: any,
  errorMessage: string
}

export interface IVallisCycle {
  vallisCycle: {},
  type: string,
  isLoading: boolean,
  payload?: any,
  errorMessage: string
}

export interface IAlerts {
  node: string,
  faction: string
}


export interface IAlertsState {
  alerts: [],
  type: string,
  isLoading: boolean,
  payload?: any,
  errorMessage: string
}

export interface IEvents {
  events: [],
  type: string,
  isLoading: boolean,
  payload?: any,
  errorMessage: string
}

export interface IDailyDeals {
  deals: [],
  type: string,
  isLoading: boolean,
  payload?: any,
  errorMessage: string
}

export interface IFissures {
  tier: string,
  tierNum: number,
  node: string,
  missionType: string,
  enemy: string,
  eta: string
}

export interface IFissuresState {
  fissures: [],
  type: string,
  isLoading: boolean,
  payload?: any,
  errorMessage: string
}

export interface ISorties {
  sorties: {},
  type: string,
  isLoading: boolean,
  payload?: any,
  errorMessage: string
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
