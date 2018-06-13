export default function classs(state = {}, action) {
  switch (action.type) {
    case 'SET_CLASS':
      return action.class || state;
    default:
      return state;
  }
}
