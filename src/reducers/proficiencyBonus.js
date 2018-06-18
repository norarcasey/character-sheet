const proficiencyBonus = (state = 2, action) => {
  switch (action.type) {
    case 'SET_PROFICIENCY_BONUS':
      return action.value;
    default:
      return state;
  }
};

export default proficiencyBonus;
