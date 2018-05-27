export default function classId(state = [], action) {
  switch (action.type) {
    case 'SET_CLASS_ID':
      return action.classId || 1
    default:
      return state
  }
}