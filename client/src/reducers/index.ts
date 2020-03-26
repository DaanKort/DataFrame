import { combineReducers } from 'redux';
import { frameReducer, FrameState } from './frameReducer';
import { weaponReducer, WeaponState }  from './weaponReducer';
import { newsReducer, NewsState } from './newsReducer';
import { modsReducer, ModsState } from './modsReducer';
import { arcaneReducer, ArcaneState } from './arcaneReducer';
import { resourceReducer, ResourceState } from './resourceReducer';
import { cetusCycleReducer, CetusCycleState } from './cetusCycleReducer';
import { vallisCycleReducer, VallisCycleState } from './vallisCycleReducer';
import { alertsReducer, AlertsState } from './alertsReducer';
import { eventsReducer, EventsState } from './eventsReducer';
import { dealsReducer, DealsState } from './dealsReducer';
import { fissuresReducer, FissureState } from './fissuresReducer';
import { sortieReducer, SortieState } from './sortiesReducer';

export interface State {
  news: NewsState
  weapons: WeaponState
  frames: FrameState
  mods: ModsState
  arcanes: ArcaneState
  resources: ResourceState
  cetusCycle: CetusCycleState
  vallisCycle: VallisCycleState
  alerts: AlertsState
  events: EventsState
  deals: DealsState
  fissures: FissureState
  sorties: SortieState
}

export const rootReducer = combineReducers<State>({
  frames: frameReducer,
  weapons: weaponReducer,
  news: newsReducer,
  mods: modsReducer,
  arcanes: arcaneReducer,
  resources: resourceReducer,
  cetusCycle: cetusCycleReducer,
  vallisCycle: vallisCycleReducer,
  alerts: alertsReducer,
  events: eventsReducer,
  deals: dealsReducer,
  fissures: fissuresReducer,
  sorties: sortieReducer 
});

