import { INewsState, IInvasionsState, IAlertsState, IFissuresState } from '../interfaces/index'
import { createAction } from 'redux-actions';

export const REQUEST_FRAME_DATA = 'REQUEST_FRAME_DATA'
export const REQUEST_FRAME_DATA_FAILED = 'REQUEST_FRAME_DATA_FAILED'
export const RECEIVED_FRAME_DATA = 'RECEIVED_FRAME_DATA'

export const REQUEST_WEAPON_DATA = 'REQUEST_WEAPON_DATA'
export const REQUEST_WEAPON_DATA_FAILED = 'REQUEST_WEAPON_DATA_FAILED'
export const RECEIVED_WEAPON_DATA = 'RECEIVED_WEAPON_DATA'

export const REQUEST_NEWS_DATA = 'REQUEST_NEWS_DATA'
export const REQUEST_NEWS_DATA_FAILED = 'REQUEST_NEWS_DATA_FAILED'
export const RECEIVED_NEWS_DATA = 'RECEIVED_NEWS_DATA'

export const REQUEST_MOD_DATA = 'REQUEST_MOD_DATA'
export const REQUEST_MOD_DATA_FAILED = 'REQUEST_MOD_DATA_FAILED'
export const RECEIVED_MOD_DATA = 'RECEIVED_MOD_DATA'

export const REQUEST_ARCANE_DATA = 'REQUEST_ARCANE_DATA'
export const REQUEST_ARCANE_DATA_FAILED = 'REQUEST_ARCANE_DATA_FAILED'
export const RECEIVED_ARCANE_DATA = 'RECEIVED_ARCANE_DATA'

export const REQUEST_RESOURCE_DATA = 'REQUEST_RESOURCE_DATA'
export const REQUEST_RESOURCE_DATA_FAILED = 'REQUEST_RESOURCE_DATA_FAILED'
export const RECEIVED_RESOURCE_DATA = 'RECEIVED_RESOURCE_DATA'

export const REQUEST_CETUS_CYCLE_DATA = 'REQUEST_CETUS_CYCLE_DATA'
export const REQUEST_CETUS_CYCLE_DATA_FAILED = 'REQUEST_CETUS_CYCLE_DATA_FAILED'
export const RECEIVED_CETUS_CYCLE_DATA = 'RECEIVED_CETUS_CYCLE_DATA'

export const REQUEST_VALLIS_CYCLE_DATA = 'REQUEST_VALLIS_CYCLE_DATA'
export const REQUEST_VALLIS_CYCLE_DATA_FAILED = 'REQUEST_VALLIS_CYCLE_DATA_FAILED'
export const RECEIVED_VALLIS_CYCLE_DATA = 'RECEIVED_VALLIS_CYCLE_DATA'

export const REQUEST_ALERTS_DATA = 'REQUEST_ALERTS_DATA'
export const REQUEST_ALERTS_DATA_FAILED = 'REQUEST_ALERTS_FAILED'
export const RECEIVED_ALERTS_DATA = 'RECEIVED_ALERTS_DATA'

export const REQUEST_EVENTS_DATA = 'REQUEST_EVENTS_DATA'
export const REQUEST_EVENTS_DATA_FAILED = 'REQUEST_EVENTS_DATA_FAILED'
export const RECEIVED_EVENTS_DATA = 'RECEIVED_EVENTS_DATA'

export const REQUEST_DEALS_DATA = 'REQUEST_DEALS_DATA'
export const REQUEST_DEALS_DATA_FAILED = 'REQUEST_DEALS_DATA_FAILED'
export const RECEIVED_DEALS_DATA = 'RECEIVED_DEALS_DATA'

export const REQUEST_FISSURE_DATA = 'REQUEST_FISSURE_DATA'
export const REQUEST_FISSURE_DATA_FAILED = 'REQUEST_FISSURE_DATA_FAILED'
export const RECEIVED_FISSURE_DATA = 'RECEIVED_FISSURE_DATA'

export const REQUEST_SORTIE_DATA = 'REQUEST_SORTIE_DATA'
export const REQUEST_SORTIE_DATA_FAILED = 'REQUEST_SORTIE_DATA_FAILED'
export const RECEIVED_SORTIE_DATA = 'RECEIVED_SORTIE_DATA'

export const REQUEST_INVASIONS_DATA = 'REQUEST_INVASIONS_DATA'
export const REQUEST_INVASIONS_DATA_FAILED = 'REQUEST_INVASIONS_DATA_FAILED'
export const RECEIVED_INVASIONS_DATA = 'RECEIVED_INVASIONS_DATA'

export const REQUEST_LOGIN = "REQUEST_LOGIN";
export const REQUEST_LOGIN_SUCCESS = "REQUEST_LOGIN_SUCCESS";
export const REQUEST_LOGIN_FAILED = "REQUEST_LOGIN_FAILED";

export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
export const REQUEST_REGISTER = "REQUEST_REGISTER";
export const REQUEST_REGISTER_SUCCESS = "REQUEST_REGISTER_SUCCESS";
export const REQUEST_REGISTER_FAILED = "REQUEST_REGISTER_FAILED";
export const AUTH_ERROR = "AUTH_ERROR";

export const GET_ERRORS = "GET_ERRORS";
export const CLEAR_ERRORS = "CLEAR_ERRORS";

export const requestFrameData = () => ({ type: REQUEST_FRAME_DATA })
export const requestFrameDataFailed = () => ({ type: REQUEST_FRAME_DATA_FAILED })
export const receiveFrameData = (frames: any) => ({ type: RECEIVED_FRAME_DATA, payload: frames })

export const requestWeaponData = () => ({ type: REQUEST_WEAPON_DATA })
export const requestWeaponDataFailed = () => ({ type: REQUEST_WEAPON_DATA_FAILED })
export const receiveWeaponData = (weapons: any) => ({ type: RECEIVED_WEAPON_DATA, payload: weapons })

export const requestNews = () => ({ type: REQUEST_NEWS_DATA })
export const requestNewsFailed = () => ({ type: REQUEST_NEWS_DATA_FAILED })
export const receivedNews = (news: INewsState) => ({ type: RECEIVED_NEWS_DATA, payload: news })

export const requestMods = () => ({ type: REQUEST_MOD_DATA })
export const requestModsFailed = () => ({ type: REQUEST_MOD_DATA_FAILED })
export const receivedMods = (items: any) => ({ type: RECEIVED_MOD_DATA, payload: items })

export const requestArcanes = () => ({ type: REQUEST_ARCANE_DATA })
export const requestArcanesFailed = () => ({ type: REQUEST_ARCANE_DATA_FAILED })
export const receivedArcanes = (items: any) => ({ type: RECEIVED_ARCANE_DATA, payload: items })

export const requestResources = () => ({ type: REQUEST_RESOURCE_DATA })
export const requestResourcesFailed = () => ({ type: REQUEST_RESOURCE_DATA_FAILED })
export const receivedResources = (items: any) => ({ type: RECEIVED_RESOURCE_DATA, payload: items })

export const requestCetusCycle = () => ({ type: REQUEST_CETUS_CYCLE_DATA })
export const requestCetusCycleFailed = () => ({ type: REQUEST_CETUS_CYCLE_DATA_FAILED })
export const receiveCetusCycle = (cetusCycle: any) => ({ type: RECEIVED_CETUS_CYCLE_DATA, payload: cetusCycle })

export const requestVallisCycle = () => ({ type: REQUEST_VALLIS_CYCLE_DATA })
export const requestVallisCycleFailed = () => ({ type: REQUEST_VALLIS_CYCLE_DATA_FAILED })
export const receiveVallisCycle = (vallisCycle: any) => ({ type: RECEIVED_VALLIS_CYCLE_DATA, payload: vallisCycle })

export const requestAlerts = () => ({ type: REQUEST_ALERTS_DATA })
export const requestAlertsFailed = () => ({ type: REQUEST_ALERTS_DATA_FAILED })
export const receiveAlerts = (alerts: IAlertsState) => ({ type: RECEIVED_ALERTS_DATA, payload: alerts })

export const requestEvents = () => ({ type: REQUEST_EVENTS_DATA })
export const requestEventsFailed = () => ({ type: REQUEST_EVENTS_DATA_FAILED })
export const receiveEvents = (events: any) => ({ type: RECEIVED_EVENTS_DATA, payload: events })

export const requestDeals = () => ({ type: REQUEST_DEALS_DATA })
export const requestDealsFailed = () => ({ type: REQUEST_DEALS_DATA_FAILED })
export const receiveDeals = (deals: any) => ({ type: RECEIVED_DEALS_DATA, payload: deals })

export const requestFissures = () => ({ type: REQUEST_FISSURE_DATA })
export const requestFissuresFailed = () => ({ type: REQUEST_FISSURE_DATA_FAILED })
export const receiveFissures = (fissures: IFissuresState) => ({ type: RECEIVED_FISSURE_DATA, payload: fissures })

export const requestSorties = () => ({ type: REQUEST_SORTIE_DATA })
export const requesSortiesFailed = () => ({ type: REQUEST_SORTIE_DATA_FAILED })
export const receiveSorties = (sorties: any) => ({ type: RECEIVED_SORTIE_DATA, payload: sorties })

export const requestInvasions = () => ({ type: REQUEST_INVASIONS_DATA })
export const requesInvasionsFailed = () => ({ type: REQUEST_INVASIONS_DATA_FAILED })
export const receiveInvasions = (invasions: IInvasionsState) => ({ type: RECEIVED_INVASIONS_DATA, payload: invasions })

export const requestLogin = createAction(REQUEST_LOGIN);
export const receiveLogin = createAction(REQUEST_LOGIN_SUCCESS);
export const requestLoginFailed = createAction(REQUEST_LOGIN_FAILED);

export const requestRegister = createAction(REQUEST_REGISTER);
export const receiveRegister = createAction(REQUEST_REGISTER_SUCCESS);
export const receiveRegisterFailed = createAction(REQUEST_REGISTER_FAILED);

export const logoutSuccess = createAction(LOGOUT_SUCCESS);

export const authError = createAction(AUTH_ERROR);

export const getErrors = createAction(GET_ERRORS);
export const clearErrors = createAction(CLEAR_ERRORS);
