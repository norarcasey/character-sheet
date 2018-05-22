import { combineReducers } from 'redux'
import attributes from './attributes'
import classes from './classes'
import proficiencyBonus from './proficiencyBonus'
import proficiencies from './proficiencies'
import skills from './skills'

export default combineReducers({
  attributes,
  classes,
  proficiencyBonus,
  proficiencies,
  skills
})