const abilityScores = (state = [], action) => {
  switch (action.type) {
    case 'SET_ABILITY_SCORE':
      let results = []

      state.forEach(ability => {

        if (ability.name === action.name) {
          results.push({ ...ability, score: parseInt(action.score, 10) })
        } else {
          results.push(ability)
        }
      })

      return results

    default:
      return state
  }
}

export default abilityScores