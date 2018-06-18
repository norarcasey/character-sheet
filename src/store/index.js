import { createStore } from 'redux';
import rootReducer from '../reducers';
import { PreloadedState } from './preloadedState';

// /* eslint-disable no-underscore-dangle */
const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
// /* eslint-enable */

const store = createStore(rootReducer, PreloadedState, composeEnhancers);

export default store;
