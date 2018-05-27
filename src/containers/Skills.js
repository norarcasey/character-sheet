import React from 'react'
import { connect } from 'react-redux'
import Skill from '../components/Skill'
import { modifierHelper } from '../helpers/modifierHelper'

const Skills = ({ abilityScores, skills, proficiencyBonus }) => {

  return (
    <div className="skills">
      <h2>Skills</h2>
      {
        skills.map( (skill, index) => {
          let abilityScore = abilityScores.filter(ability => ability.name === skill.type)[0]
          let modifier = modifierHelper(abilityScore.score)

          return (
            <Skill
              key={index}
              abilityScore={abilityScore}
              skill={skill}
              modifier={modifier}
              proficiencyBonus={proficiencyBonus}
            />
          )
        })
      }
    </div>
  )
}

const mapStateToProps = state => ({
  abilityScores: state.abilityScores,
  skills: state.skills,
  proficiencyBonus: state.proficiencyBonus
})

export default connect(mapStateToProps)(Skills)