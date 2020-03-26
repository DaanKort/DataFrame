import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension';

import { rootReducer } from '../reducers/index';
import mySaga from '../sagas/sagas'

const sagaMiddleware = createSagaMiddleware()
const composeEnhancers = composeWithDevTools({
  trace: true,
  actionCreators: {

  }
})

export default createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(sagaMiddleware),
  )
)

sagaMiddleware.run(mySaga)

