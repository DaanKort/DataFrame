// import { createStore, applyMiddleware } from 'redux'
// import createSagaMiddleware from 'redux-saga'
// import { composeWithDevTools } from 'redux-devtools-extension';

// import { rootReducer } from '../reducers/index';
// import mySaga from '../sagas/sagas'

// const sagaMiddleware = createSagaMiddleware()
// const composeEnhancers = composeWithDevTools({
//   trace: true,
//   actionCreators: {

//   }
// })

// export default createStore(
//   rootReducer,
//   composeEnhancers(
//     applyMiddleware(sagaMiddleware),
//   )
// )

// sagaMiddleware.run(mySaga)




// import { createStore, applyMiddleware } from 'redux'
// import createSagaMiddleware from 'redux-saga'
// import { composeWithDevTools } from 'redux-devtools-extension';
// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
// import { combineReducers } from 'redux';

// import autoMergeLevel1 from 'redux-persist/lib/stateReconciler/autoMergeLevel1';
// import rootReducer, { State } from '../reducers/index';
// import { PersistPartial } from 'redux-persist/es/persistReducer';

// const sagaMiddleware = createSagaMiddleware()
// const composeEnhancers = composeWithDevTools({
//   trace: true,
//   actionCreators: {

//   }
// })

// const persistConfig = {
//   key: 'root',
//   storage: storage,
//   stateReconciler: autoMergeLevel1
// };



// let persistor = persistReducer<State>(persistConfig, rootReducer);
// let store = createStore<State & PersistPartial, any, any, any>(
//   composeEnhancers(
//     persistor,
//     applyMiddleware(sagaMiddleware),
//   )
// );
// export default store;

// let persistorReducer = persistReducer<State>(persistConfig, rootReducer);
// const store = createStore<State & PersistPartial, any, any, any>(
//   composeEnhancers(
//     persistorReducer,
//     applyMiddleware(sagaMiddleware),
//   )
// );
// let persistor = persistStore(store);

// export { store, persistor, sagaMiddleware }



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
  stateReconciler: autoMergeLevel1
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
  store
);
export { persistor, store };

sagaMiddleware.run(mySaga)
