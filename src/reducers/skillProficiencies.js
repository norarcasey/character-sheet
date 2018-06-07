const skillProficiencies = (state = [], action) => {
    switch (action.type) {
      case 'UPDATE_SKILL_PROFICIENCY':

        let stateContainsProficiency = state.indexOf(action.name) > -1;

        if(!stateContainsProficiency && action.isProficient) {
            return [...state, action.name]
        } else if(stateContainsProficiency && !action.isProficient) {
            return state.filter(skill => skill === action.name)
        } else {
            return state
        }

      case 'RESET_SKILL_PROFICIENCIES':

        return state.map(pro => {
          if(action.proficiencies.map(pro => pro.name).indexOf(pro) !== -1)
            return pro
        })

      default:
        return state
    }
  }

  export default skillProficiencies