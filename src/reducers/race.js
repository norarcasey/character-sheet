export default function race(state = [], action) {
  switch (action.type) {
    case 'SET_RACE':
      return action.race || {}
    default:
      return state
  }
}