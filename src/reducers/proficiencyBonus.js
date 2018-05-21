const proficiencyBonus = (state = [], action) => {
  switch (action.type) {
    case 'SET_PROFICIENCY_BONUS':
      return action.value
    default:
      return state
  }
}

export default proficiencyBonus