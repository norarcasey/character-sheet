import React from 'react';
import { concatPropNames, getDetails } from '../helpers/detailHelper';
import abilityScores from '../data/abilityScores';

const RaceDetails = ({ details }) => {
  return (
    <div className="details">
      <ul>
        {getDetails(details).map((item, index) => {
          return (
            <p key={index}>
              <label>{item.name}</label>
              <span>{item.value}</span>
            </p>
          );
        })}
      </ul>
      {/* {getAbilityBonus(details.ability_bonuses, abilityScores)}
      <p>
        <label>Size:</label>
        {details.size}
      </p>
      <p>
        <label>Speed:</label>
        {details.speed}
      </p>
      {concatPropNames('Traits', details.traits)}
      <p>
        <label>Languages:</label>
        {details.language_desc}
      </p>
      {concatPropNames('Proficiencies', details.starting_proficiencies)}
      <p>
        <label>Age:</label>
        {details.age}
      </p>
      <p>
        <label>Alignment:</label>
        {details.alignment}
      </p> */}
    </div>
  );
};

const getAbilityBonus = (bonusArray, abilityScores) => {
  let results = bonusArray
    .map((value, index) => {
      return value > 0 ? `${abilityScores[index].name} +${value}` : false;
    })
    .filter(value => value);

  return (
    <p>
      <label>Ability Bonuses:</label>
      <span>{results.join(', ')}</span>
    </p>
  );
};

export default RaceDetails;
