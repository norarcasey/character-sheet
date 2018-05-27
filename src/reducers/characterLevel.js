export default function characterLevel(state = 1, action) {
  switch (action.type) {
    case 'SET_CHARACTER_LEVEL':
      return parseInt(action.level, 10)
    default:
      return state
  }
}