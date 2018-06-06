export default function classs(state = [], action) {
  switch (action.type) {
    case 'SET_CLASS':
      return action.class || {}
    default:
      return state
  }
}