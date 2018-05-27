export default function counter(state = [], action) {
    switch (action.type) {
      case 'CLASSES_FETCH_SUCCEEDED':
        return action.classes
      case 'CLASS_FETCH_SUCCEEDED':

        let results = []
        state.forEach(c => {

          if(c.name === action.class.name) {
            results.push( {...c, details: action.class })
          } else {
            results.push(c)
          }

        })

        return results
      default:
        return state
    }
  }