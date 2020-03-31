import { put, takeLatest, call } from "redux-saga/effects";
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
  receiveSorties,
  REQUEST_INVASIONS_DATA,
  receiveInvasions,
  REQUEST_LOGIN,
  receiveLogin
} from "../actions/actions";

import { api, Login } from "../api/api";

function* fetchFrames() {
  try {
    const dataObj = yield call(api, "warframes");
    yield put(receiveFrameData(dataObj));
  } catch (e) {
    console.log(e);
  }
}

function* fetchWeapons() {
  try {
    const dataObj = yield call(api, "weapons");
    yield put(receiveWeaponData(dataObj));
  } catch (e) {
    console.log(e);
  }
}

function* fetchNews() {
  try {
    const dataObj = yield call(api, "pc/news");
    yield put(receivedNews(dataObj));
  } catch (e) {
    console.log(e);
  }
}

function* fetchMods() {
  try {
    let dataObj = yield call(api, "items");
    yield put(receivedMods(dataObj));
  } catch (e) {
    console.log(e);
  }
}

function* fetchArcanes() {
  try {
    let dataObj = yield call(api, "arcanes");
    yield put(receivedArcanes(dataObj));
  } catch (e) {
    console.log(e);
  }
}

function* fetchResources() {
  try {
    let dataObj = yield call(api, "items");
    // eslint-disable-next-line
    let resourceArray = new Array();
    dataObj.map((resource: any) => {
      if (resource.category === "Resources") {
        resourceArray.push(resource);
      }
      return resourceArray;
    });
    yield put(receivedResources(resourceArray));
  } catch (e) {
    console.log(e);
  }
}

function* fetchCetusCycle() {
  try {
    const dataObj = yield call(api, "pc/cetusCycle");
    yield put(receiveCetusCycle(dataObj));
  } catch (e) {
    console.log(e);
  }
}

function* fetchVallisCycle() {
  try {
    const dataObj = yield call(api, "pc/vallisCycle");
    yield put(receiveVallisCycle(dataObj));
  } catch (e) {
    console.log(e);
  }
}

function* fetchAlerts() {
  try {
    const dataObj = yield call(api, "pc/alerts");
    yield put(receiveAlerts(dataObj));
  } catch (e) {
    console.log(e);
  }
}

function* fetchEvents() {
  try {
    const dataObj = yield call(api, "pc/events");
    yield put(receiveEvents(dataObj));
  } catch (e) {
    console.log(e);
  }
}

function* fetchDeals() {
  try {
    const dataObj = yield call(api, "pc/dailyDeals");
    yield put(receiveDeals(dataObj));
  } catch (e) {
    console.log(e);
  }
}

function* fetchFissures() {
  try {
    const dataObj = yield call(api, "pc/fissures");
    yield put(receiveFissures(dataObj));
  } catch (e) {
    console.log(e);
  }
}

function* fetchSorties() {
  try {
    const dataObj = yield call(api, "pc/sortie");
    yield put(receiveSorties(dataObj));
  } catch (e) {
    console.log(e);
  }
}

function* fetchInvasions() {
  try {
    const dataObj = yield call(api, "pc/invasions");
    yield put(receiveInvasions(dataObj));
  } catch (e) {
    console.log(e);
  }
}

function* callRequestLogin() {
  let results = yield call(Login);
  results = JSON.parse(results);
  console.log(results);
  // if(typeof results.token == typeof undefined){
  //     yield put(recieveLoginError(results));
  // }
  // const token = results.token
  // localStorage.setItem('jwtToken', token)
  // setAuth(token);
  // const Tokendecode = yield jwt.decode(token)
  // localStorage.setItem('User', Tokendecode.sub)
  // yield put(recieveLogin(Tokendecode));
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
  yield takeLatest(REQUEST_INVASIONS_DATA, fetchInvasions);
  yield takeLatest(REQUEST_LOGIN, callRequestLogin);
}
