export const setAbilityScore = (name, score) => ({
  type: 'SET_ABILITY_SCORE',
  name,
  score
})

// Increase or Decrease Proficiency bonus
export const setProficiency = (value) => ({
  type: 'SET_PROFICIENCY_BONUS',
  value
})

// Adds Saving Throw or Skill to the list of proficiencies
export const addProficiency = (name) => ({
  type: 'ADD_PROFICIENCY',
  name
})

// Adds Saving Throw or Skill to the list of proficiencies
export const setSkill = (name, isProficient=false) => ({
  type: 'SET_SKILL',
  name,
  isProficient
})