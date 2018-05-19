export const setAttribute = (text,value) => ({
  type: 'SET_ATTRIBUTE',
  text,
  value
})

export const saveState = () => ({
  type: 'SAVE_STATE'
})