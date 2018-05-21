export const setAttribute = (text, score) => ({
  type: 'SET_ATTRIBUTE',
  text,
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
export const addSkill = (name, attribute) => ({
  type: 'ADD_SKILL',
  name,
  attribute
})