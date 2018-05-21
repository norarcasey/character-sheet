import React, { Component } from 'react'

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
      this.setState({ proficiencyBonus: parseInt(proficiencyBonus) })
    }

    render() {

      return (
        <div className="skill">
            <input
              type="checkbox"
              value={this.props.proficiencyBonus}
              onChange={ (e) => { this.updateModifier(e.target.checked ? e.target.value : 0) } }
            />
            <span>{ this.props.modifier + this.state.proficiencyBonus }</span>
            <label>{ this.props.skill.name } <span>( {this.props.skill.type} )</span></label>
        </div>
      )
    }

  }

  export default Skill