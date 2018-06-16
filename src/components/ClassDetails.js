import React from 'react';
import { concatPropNames } from '../helpers/detailHelper';
import { classProficiencies } from '../helpers/classHelper';

const ClassDetails = ({ details }) => {
  return (
    <div className="details">
      <p>
        <label>Hit Die:</label>1d{details.hit_die}
      </p>
      {concatPropNames('Saving Throws', details.saving_throws)}
      {concatPropNames('Proficiencies', details.proficiencies)}
      {concatPropNames('Subclasses', details.subclasses)}
      {concatPropNames(
        'Skill Proficiencies Choices',
        classProficiencies(details)
      )}
    </div>
  );
};

export default ClassDetails;
