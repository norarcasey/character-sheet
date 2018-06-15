import React from 'react';
import { connect } from 'react-redux';

export const CharacterLevel = ({ dispatch }) => {
  return (
    <input
      type="number"
      className="character-level"
      defaultValue="1"
      onChange={e => {
        dispatch({ type: 'SET_CHARACTER_LEVEL', level: e.target.value });
      }}
    />
  );
};

export default connect()(CharacterLevel);
