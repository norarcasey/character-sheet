import { combineReducers } from 'redux';
import abilityScores from './abilityScores';
import characterLevel from './characterLevel';
import characterName from './characterName';
import characterClass from './class';
import proficiencyBonus from './proficiencyBonus';
import race from './race';
import skills from './skills';
import skillProficiencies from './skillProficiencies';

export default combineReducers({
  abilityScores,
  characterLevel,
  characterName,
  characterClass,
  proficiencyBonus,
  race,
  skills,
  skillProficiencies
});
