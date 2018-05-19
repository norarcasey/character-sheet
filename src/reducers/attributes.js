import {saveStateToFirebase}  from '../database/firebase'

const attributes = (state = [], action) => {
  switch (action.type) {
    case 'SET_ATTRIBUTE':
      let results = []
      let attributeExists = false
      
      state.forEach(attr => {

        if (attr.text === action.text) {
          attributeExists = true
          results.push({ ...attr, value: action.value })
        } else {
          results.push(attr)
        }
      })

      if(!attributeExists) {
        results.push({ text: action.text, value: action.value })
      }

      return results
    
    case 'SAVE_STATE':
      saveStateToFirebase(state)
      return state

    default:
      return state
  }
}

export default attributes