import { combineReducers } from 'redux'
import abilityScores from './abilityScores'
import characterLevel from './characterLevel'
import characterName from './characterName'
import classes from './classes'
import characterClass from './class'
import proficiencyBonus from './proficiencyBonus'
import races from './races'
import race from './race'
import skills from './skills'

export default combineReducers({
  abilityScores,
  characterLevel,
  characterName,
  classes,
  characterClass,
  proficiencyBonus,
  races,
  race,
  skills
})