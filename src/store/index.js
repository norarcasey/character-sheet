import { createStore } from 'redux'
import rootReducer from '../reducers'
import { PreloadedState  } from './preloadedState'

/* eslint-disable no-underscore-dangle */
const store = createStore(
  rootReducer,
  PreloadedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
/* eslint-enable */

export default store