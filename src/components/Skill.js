import React, { Component } from 'react'
import { connect } from 'react-redux'

class Skill extends Component {

    constructor(props) {
      super(props)

      this.state = {
        modifier: props.modifier,
        proficiencyBonus: 0
      }

      this.updateModifier = this.updateModifier.bind(this);
    }

    updateModifier(proficiencyBonus) {
      this.setState({ proficiencyBonus: parseInt(proficiencyBonus, 10) })
    }

    render() {

      return (
        <div className="skill">
            <input
              type="checkbox"
              checked={this.props.skillProficiencies.indexOf(this.props.skill.name) > -1}
              value={this.props.proficiencyBonus}
              disabled={this.props.proficiencies.indexOf(this.props.skill.name) < 0}
              onChange={ (e) => {
                this.props.dispatch({
                    type: 'UPDATE_SKILL_PROFICIENCY',
                    name: this.props.skill.name,
                    isProficient: e.target.checked
                  })
                this.updateModifier(e.target.checked ? e.target.value : 0)
              } }
            />
            <label>{ this.props.modifier + this.state.proficiencyBonus }&nbsp;{ this.props.skill.name } <span>({this.props.skill.type})</span></label>
        </div>
      )
    }

  }

  const mapStateToProp = state => ({
    skillProficiencies: state.skillProficiencies
  })

  export default connect(mapStateToProp)(Skill)