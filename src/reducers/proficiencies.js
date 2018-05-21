const proficiencies = (state = [], action) => {
  switch (action.type) {
    case 'ADD_PROFICIENCY':
      return [ ...state, action.name ]
    default:
      return state
  }
}

export default proficiencies