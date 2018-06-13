const skillProficiencies = (state = [], action) => {
  switch (action.type) {
    case 'UPDATE_SKILL_PROFICIENCY':
      let stateContainsProficiency = state.indexOf(action.name) > -1;

      if(!stateContainsProficiency && action.isProficient) {
        return [...state, action.name];
      } else if(stateContainsProficiency && !action.isProficient) {
        return state.filter(skill => skill !== action.name);
      } else {
        return state;
      }

    case 'RESET_SKILL_PROFICIENCIES':
      let previouslySelectedProficiencies = action.proficiencies.map(pro => pro.name);
      return state.filter(pro => previouslySelectedProficiencies.indexOf(pro) !== -1);

    default:
      return state;
  }
};

export default skillProficiencies;