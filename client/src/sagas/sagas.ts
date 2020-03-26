import { put, takeLatest, call } from 'redux-saga/effects'
import {
  REQUEST_WEAPON_DATA,
  receiveWeaponData,
  REQUEST_FRAME_DATA,
  receiveFrameData,
  REQUEST_NEWS_DATA,
  receivedNews,
  REQUEST_MOD_DATA,
  receivedMods,
  REQUEST_ARCANE_DATA,
  receivedArcanes,
  REQUEST_RESOURCE_DATA,
  receivedResources,
  REQUEST_CETUS_CYCLE_DATA,
  receiveCetusCycle,
  REQUEST_VALLIS_CYCLE_DATA,
  receiveVallisCycle,
  REQUEST_ALERTS_DATA,
  receiveAlerts,
  REQUEST_EVENTS_DATA,
  receiveEvents,
  REQUEST_DEALS_DATA,
  receiveDeals,
  REQUEST_FISSURE_DATA,
  receiveFissures,
  REQUEST_SORTIE_DATA,
  receiveSorties
} from '../actions/actions';

import { 
  getWeapons, 
  getFrames, 
  getNews, getItems, 
  getCetusCycle, getVallisCycle, 
  getAlerts,
  getEvents,
  getDailyDeals,
  getFissures,
  getSorties
 } from '../api/api'

function* fetchFrames () {
  try {
    const frames = yield call(getFrames);
    yield put(receiveFrameData(frames));
  } catch (e) {
    console.log(e);
  }
}

function* fetchWeapons() {
  try {
    const weapons = yield call(getWeapons);
    yield put(receiveWeaponData(weapons));
  } catch (e) {
    console.log(e)
  }
}


function* fetchNews() {
  try {
    const news = yield call(getNews);
    yield put(receivedNews(news));
  } catch (e) {
    console.log(e)
  }
}

function* fetchMods() {
  try {
    let modData = yield call(getItems);
    // eslint-disable-next-line
    let modArray = new Array();
    modData.map((mods: any) => {
      if(mods.category === 'Mods') {
        modArray.push(mods)
      }
      return modArray
    })
    yield put(receivedMods(modArray));
  } catch (e) {
    console.log(e)
  }
}

function* fetchArcanes() {
  try {
    let arcaneData = yield call(getItems);
    // eslint-disable-next-line
    let arcaneArray = new Array();
    arcaneData.map((arcane: any) => {
      if (arcane.category === 'Arcanes') {
        arcaneArray.push(arcane)
      }
      return arcaneArray
    })
    yield put(receivedArcanes(arcaneArray));
  } catch (e) {
    console.log(e)
  }
}

function* fetchResources() {
  try {
    let resourceData = yield call(getItems);
    // eslint-disable-next-line
    let resourceArray = new Array();
    resourceData.map((resource: any) => {
      if (resource.category === 'Resources') {
        resourceArray.push(resource)
      }
      return resourceArray
    })
    yield put(receivedResources(resourceArray));
  } catch (e) {
    console.log(e)
  }
}

function* fetchCetusCycle() {
  try {
    const cetusCycle = yield call(getCetusCycle);
    yield put(receiveCetusCycle(cetusCycle));
  } catch (e) {
    console.log(e)
  }
}

function* fetchVallisCycle() {
  try {
    const vallisCycle = yield call(getVallisCycle);
    yield put(receiveVallisCycle(vallisCycle));
  } catch (e) {
    console.log(e)
  }
}

function* fetchAlerts() {
  try {
    const alerts = yield call(getAlerts);
    yield put(receiveAlerts(alerts));
  } catch (e) {
    console.log(e);
  }
}

function* fetchEvents() {
  try {
    const events = yield call(getEvents);
    yield put(receiveEvents(events))
  } catch (e) {
    console.log(e)
  }
}

function* fetchDeals() {
  try {
    const deals = yield call(getDailyDeals);
    yield put(receiveDeals(deals))
  } catch (e) {
    console.log(e)
  }
}

function* fetchFissures() {
  try {
    const fissures = yield call(getFissures);
    yield put(receiveFissures(fissures))
  } catch (e) {
    console.log(e)
  }
}

function* fetchSorties() {
  try {
    const sorties = yield call(getSorties);
    yield put(receiveSorties(sorties))
  } catch (e) {
    console.log(e)
  }
}

export default function* mySaga() {
  yield takeLatest(REQUEST_WEAPON_DATA, fetchWeapons);
  yield takeLatest(REQUEST_FRAME_DATA, fetchFrames);
  yield takeLatest(REQUEST_NEWS_DATA, fetchNews);
  yield takeLatest(REQUEST_MOD_DATA, fetchMods);
  yield takeLatest(REQUEST_ARCANE_DATA, fetchArcanes);
  yield takeLatest(REQUEST_RESOURCE_DATA, fetchResources);
  yield takeLatest(REQUEST_CETUS_CYCLE_DATA, fetchCetusCycle);
  yield takeLatest(REQUEST_VALLIS_CYCLE_DATA, fetchVallisCycle);
  yield takeLatest(REQUEST_ALERTS_DATA, fetchAlerts);
  yield takeLatest(REQUEST_EVENTS_DATA, fetchEvents);
  yield takeLatest(REQUEST_DEALS_DATA, fetchDeals);
  yield takeLatest(REQUEST_FISSURE_DATA, fetchFissures);
  yield takeLatest(REQUEST_SORTIE_DATA, fetchSorties);
}
