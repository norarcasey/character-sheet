import React from 'react';
import { connect } from 'react-redux';
import { setAbilityScore } from '../actions';

const AbilityScore = ({ dispatch, fullName, modifier, name, score }) => {
  return (
    <div className="ability-score">
      <label>{fullName}</label>
      <span className="ability-score-modifier">{modifier}</span>
      <input
        type="number"
        value={score}
        onChange={e => {
          dispatch(setAbilityScore(name, e.target.value));
        }}
      />
    </div>
  );
};

export default connect()(AbilityScore);
