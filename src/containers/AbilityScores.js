import React from 'react';
import { connect } from 'react-redux';
import { setAbilityScore } from '../actions';
import { saveStateToFirebase } from '../database/firebase';
import { modifierHelper } from '../helpers/modifierHelper';

export const AbilityScores = ({ abilityScores, dispatch, race }) => {
  return (
    <div className="ability-scores">
      <form
        onSubmit={e => {
          e.preventDefault();
        }}
      >
        {abilityScores.map((ability, key) => {
          let score = ability.score + race.ability_bonuses[key];
          let modifier = modifierHelper(score);

          return (
            <div className="ability-score" key={key}>
              <label>{ability.full_name}</label>
              <span className="ability-score-modifier">{modifier}</span>
              <input
                type="number"
                value={score}
                onChange={e => {
                  dispatch(setAbilityScore(ability.name, e.target.value));
                }}
              />
            </div>
          );
        })}

        <button onClick={e => saveStateToFirebase()}>Save State</button>
      </form>
    </div>
  );
};

const mapStateToProps = state => ({
  abilityScores: state.abilityScores,
  race: state.race
});

export default connect(mapStateToProps)(AbilityScores);
