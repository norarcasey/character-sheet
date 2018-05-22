const attributes = (state = [], action) => {
  switch (action.type) {
    case 'SET_ATTRIBUTE':
      let results = []

      state.forEach(attr => {

        if (attr.text === action.text) {
          results.push({ ...attr, score: parseInt(action.score, 10) })
        } else {
          results.push(attr)
        }
      })

      return results

    default:
      return state
  }
}

export default attributes