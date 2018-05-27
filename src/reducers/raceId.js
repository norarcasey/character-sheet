export default function raceId(state = [], action) {
  switch (action.type) {
    case 'SET_RACE_ID':
      return action.raceId || 1
    default:
      return state
  }
}