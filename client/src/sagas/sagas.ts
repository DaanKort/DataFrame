import { put, call, take, all, fork } from 'redux-saga/effects'
import {
  receiveWeaponData,
  receiveFrameData,
  receivedNews,
  receivedMods,
  receivedArcanes,
  receivedResources,
  receiveCetusCycle,
  receiveVallisCycle,
  receiveAlerts,
  receiveEvents,
  receiveDeals,
  receiveFissures,
  receiveSorties,
  receiveInvasions
} from '../actions/actions';
import { REHYDRATE } from 'redux-persist/lib/constants'


import { api } from '../api/api'

function* fetchFrames() {
  try {
    const dataObj = yield call(api, 'warframes');
    console.log('1');
    yield put(receiveFrameData(dataObj));
  } catch (e) {
    console.log(e);
  }
}

function* fetchWeapons() {
  try {
    const dataObj = yield call(api, 'weapons');
    yield put(receiveWeaponData(dataObj));
  } catch (e) {
    console.log(e)
  }
}


function* fetchNews() {
  try {
    const dataObj = yield call(api, 'pc/news');
    yield put(receivedNews(dataObj));
  } catch (e) {
    console.log(e)
  }
}

function* fetchMods() {
  try {
    let dataObj = yield call(api, 'items');
    yield put(receivedMods(dataObj));
  } catch (e) {
    console.log(e)
  }
}

function* fetchArcanes() {
  try {
    let dataObj = yield call(api, 'arcanes');
    yield put(receivedArcanes(dataObj));
  } catch (e) {
    console.log(e)
  }
}

function* fetchResources() {
  try {
    let dataObj = yield call(api, 'items');
    // eslint-disable-next-line
    let resourceArray = new Array();
    dataObj.map((resource: any) => {
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
    const dataObj = yield call(api, 'pc/cetusCycle');
    yield put(receiveCetusCycle(dataObj));
  } catch (e) {
    console.log(e)
  }
}

function* fetchVallisCycle() {
  try {
    const dataObj = yield call(api, 'pc/vallisCycle');
    yield put(receiveVallisCycle(dataObj));
  } catch (e) {
    console.log(e)
  }
}

function* fetchAlerts() {
  try {
    const dataObj = yield call(api, 'pc/alerts');
    yield put(receiveAlerts(dataObj));
  } catch (e) {
    console.log(e);
  }
}

function* fetchEvents() {
  try {
    const dataObj = yield call(api, 'pc/events');
    yield put(receiveEvents(dataObj))
  } catch (e) {
    console.log(e)
  }
}

function* fetchDeals() {
  try {
    const dataObj = yield call(api, 'pc/dailyDeals');
    yield put(receiveDeals(dataObj))
  } catch (e) {
    console.log(e)
  }
}

function* fetchFissures() {
  try {
    const dataObj = yield call(api, 'pc/fissures');
    yield put(receiveFissures(dataObj))
  } catch (e) {
    console.log(e)
  }
}

function* fetchSorties() {
  try {
    const dataObj = yield call(api, 'pc/sortie');
    yield put(receiveSorties(dataObj))
  } catch (e) {
    console.log(e)
  }
}

function* fetchInvasions() {
  try {
    const dataObj = yield call(api, 'pc/invasions');
    yield put(receiveInvasions(dataObj))
  } catch (e) {
    console.log(e)
  }
}

export default function* mySaga() {
  yield take(REHYDRATE);
  yield all([
    fork(fetchInvasions),
    fork(fetchWeapons),
    fork(fetchFrames),
    fork(fetchNews),
    fork(fetchMods),
    fork(fetchArcanes),
    fork(fetchResources),
    fork(fetchCetusCycle),
    fork(fetchVallisCycle),
    fork(fetchAlerts),
    fork(fetchEvents),
    fork(fetchDeals),
    fork(fetchFissures),
    fork(fetchSorties),
    fork(fetchInvasions),
  ])
  // yield takeLatest(REQUEST_WEAPON_DATA, fetchWeapons);
  // yield takeLatest(REQUEST_FRAME_DATA, fetchFrames);
  // yield takeLatest(REQUEST_NEWS_DATA, fetchNews);
  // yield takeLatest(REQUEST_MOD_DATA, fetchMods);
  // yield takeLatest(REQUEST_ARCANE_DATA, fetchArcanes);
  // yield takeLatest(REQUEST_RESOURCE_DATA, fetchResources);
  // yield takeLatest(REQUEST_CETUS_CYCLE_DATA, fetchCetusCycle);
  // yield takeLatest(REQUEST_VALLIS_CYCLE_DATA, fetchVallisCycle);
  // yield takeLatest(REQUEST_ALERTS_DATA, fetchAlerts);
  // yield takeLatest(REQUEST_EVENTS_DATA, fetchEvents);
  // yield takeLatest(REQUEST_DEALS_DATA, fetchDeals);
  // yield takeLatest(REQUEST_FISSURE_DATA, fetchFissures);
  // yield takeLatest(REQUEST_SORTIE_DATA, fetchSorties);
  // yield takeLatest(REQUEST_INVASIONS_DATA, fetchInvasions);
}
