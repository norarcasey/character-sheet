const skills = (state = [], action) => {
  switch (action.type) {
    case 'SET_SKILL':

      let results = []

      state.forEach(skill => {

        if (skill.name === action.name) {
          results.push({ ...skill, isProficient: !!action.isProficient })
        } else {
          results.push(skill)
        }
      })

      return results
    default:
      return state
  }
}

export default skills