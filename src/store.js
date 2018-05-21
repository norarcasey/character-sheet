import { createStore } from 'redux'
import rootReducer from './reducers'

/* eslint-disable no-underscore-dangle */
const store = createStore(
  rootReducer,
  { attributes: [
    {text: "Strength", score: 0},
    {text: "Dexterity", score: 0},
    {text: "Consitution", score: 0},
    {text: "Intelligence", score: 0},
    {text: "Wisdom", score: 0},
    {text: "Charisma", score: 0}
  ]},
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
/* eslint-enable */

export default store