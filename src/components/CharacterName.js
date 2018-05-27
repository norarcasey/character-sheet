import React from 'react'
import { connect } from 'react-redux'

const CharacterName = ({ dispatch }) => {
  return (
    <input
      type="text"
      className="character-name"
      placeholder="Enter a Name"
      onChange={(e) => {
        dispatch({ type: 'SET_CHARACTER_NAME', name: e.target.value })
      }}
    />
  )
}

export default connect()(CharacterName)