import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga'
import rootReducer from '../reducers'
import rootSaga from '../sagas'
import { PreloadedState  } from './preloadedState'

const sagaMiddleware = createSagaMiddleware()

// /* eslint-disable no-underscore-dangle */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// /* eslint-enable */

const store = createStore(rootReducer, PreloadedState, composeEnhancers(
  applyMiddleware(sagaMiddleware)
));

sagaMiddleware.run(rootSaga)

export default store