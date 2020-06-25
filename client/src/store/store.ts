import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel1 from 'redux-persist/lib/stateReconciler/autoMergeLevel1';
import rootReducer, { State } from '../reducers';
import mySaga from '../sagas/sagas'
const persistConfig = {
  key: 'root',
  storage: storage,
  stateReconciler: autoMergeLevel1,
  blacklist: ['error']
};
const sagaMiddleware = createSagaMiddleware()
const composeEnhancers = composeWithDevTools({
  trace: true,
  actionCreators: {

  }
})
const pReducer = persistReducer<State>(persistConfig, rootReducer);
const store = createStore(pReducer,
  composeEnhancers(
    applyMiddleware(sagaMiddleware),
  ));
const persistor = persistStore(
  store,
);
export { persistor, store };

sagaMiddleware.run(mySaga)
