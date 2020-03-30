import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension';

import { rootReducer } from '../reducers/index';
import mySaga from '../sagas/sagas'

const api:any = ({ accessToken: 'https://api.warframestat.us/', options: {} })

const sagaMiddleware = createSagaMiddleware()
const composeEnhancers = composeWithDevTools({
  trace: true,
  actionCreators: {

  }
})

export default createStore(
  rootReducer,
  api,
  composeEnhancers(
    applyMiddleware(sagaMiddleware),
  )
)

sagaMiddleware.run(mySaga)

