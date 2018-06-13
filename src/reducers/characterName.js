export default function characterName(state = '', action) {
  switch (action.type) {
    case 'SET_CHARACTER_NAME':
      return action.name;
    default:
      return state;
  }
}
