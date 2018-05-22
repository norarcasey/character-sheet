export default function counter(state = [], action) {
    switch (action.type) {
      case 'CLASSES_FETCH_SUCCEEDED':
        return action.classes
      default:
        return state
    }
  }