import React from 'react'
import { connect } from 'react-redux'
import Skill from '../components/Skill'
import { modifierHelper } from '../helpers/modifierHelper'

const Skills = ({ attributes, skills, proficiencyBonus }) => {

  return (
    <div className="skills">
      <h2>Skills</h2>
      {
        skills.map( (skill, index) => {
          let attribute = attributes.filter(attr => attr.text === skill.type)[0]
          let modifier = modifierHelper(attribute.score)

          return (
            <Skill
              key={index}
              attribute={attribute}
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
  attributes: state.attributes,
  skills: state.skills,
  proficiencyBonus: state.proficiencyBonus
})

export default connect(mapStateToProps)(Skills)