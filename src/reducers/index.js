import { combineReducers } from 'redux'
import abilityScores from './abilityScores'
import characterLevel from './characterLevel'
import characterName from './characterName'
import classes from './classes'
import classId from './classId'
import proficiencyBonus from './proficiencyBonus'
import races from './races'
import race from './race'
import skills from './skills'

export default combineReducers({
  abilityScores,
  characterLevel,
  characterName,
  classes,
  classId,
  proficiencyBonus,
  races,
  race,
  skills
})