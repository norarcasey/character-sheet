import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootReducer from '../reducers'
import rootSaga from '../sagas'
import { PreloadedState  } from './preloadedState'

const sagaMiddleware = createSagaMiddleware()

/* eslint-disable no-underscore-dangle */
const store = createStore(
  rootReducer,
  PreloadedState,
  applyMiddleware(sagaMiddleware),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
/* eslint-enable */

sagaMiddleware.run(rootSaga)

export default store