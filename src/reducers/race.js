export default function race(state = {}, action) {
  switch (action.type) {
    case 'SET_RACE':
      return action.race || state;
    default:
      return state;
  }
}
