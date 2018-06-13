import React from 'react';
import { connect } from 'react-redux';
import Skill from '../components/Skill';
import { modifierHelper } from '../helpers/modifierHelper';
import {
  classProficiencies,
  classProficienciesChooseCount
} from '../helpers/classHelper';

const Skills = ({
  abilityScores,
  skills,
  proficiencyBonus,
  characterClass,
  skillProficiencies
}) => {
  let skillsLeftToChoose =
    classProficienciesChooseCount(characterClass) - skillProficiencies.length;

  return (
    <div className="skills">
      <h2>
        Skills{' '}
        <span className={skillsLeftToChoose < 0 ? 'alert' : ''}>
          ({skillsLeftToChoose})
        </span>
      </h2>
      {skills.map((skill, index) => {
        let abilityScore = abilityScores.filter(
          ability => ability.name === skill.type
        )[0];
        let modifier = modifierHelper(abilityScore.score);

        return (
          <Skill
            key={index}
            abilityScore={abilityScore}
            skill={skill}
            modifier={modifier}
            proficiencyBonus={proficiencyBonus}
            proficiencies={classProficiencies(characterClass).map(
              pro => pro.name
            )}
          />
        );
      })}
    </div>
  );
};

const mapStateToProps = state => ({
  abilityScores: state.abilityScores,
  skills: state.skills,
  proficiencyBonus: state.proficiencyBonus,
  skillProficiencies: state.skillProficiencies,
  characterClass: state.characterClass
});

export default connect(mapStateToProps)(Skills);
