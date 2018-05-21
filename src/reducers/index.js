import { combineReducers } from 'redux'
import attributes from './attributes'
import proficiencyBonus from './proficiencyBonus'
import proficiencies from './proficiencies'
import skills from './skills'

export default combineReducers({
  attributes,
  proficiencyBonus,
  proficiencies,
  skills
})