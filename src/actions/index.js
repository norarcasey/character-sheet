export const setAbilityScore = (name, score) => ({
  type: 'SET_ABILITY_SCORE',
  name,
  score
});

// Increase or Decrease Proficiency bonus
export const setProficiency = value => ({
  type: 'SET_PROFICIENCY_BONUS',
  value
});
