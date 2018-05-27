import { combineReducers } from 'redux'
import attributes from './attributes'
import classes from './classes'
import classId from './classId'
import proficiencyBonus from './proficiencyBonus'
import proficiencies from './proficiencies'
import races from './races'
import raceId from './raceId'
import skills from './skills'

export default combineReducers({
  attributes,
  classes,
  classId,
  proficiencyBonus,
  proficiencies,
  races,
  raceId,
  skills
})