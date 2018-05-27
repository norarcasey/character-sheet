import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setAbilityScore } from '../actions'
import { modifierHelper } from '../helpers/modifierHelper'

class AbilityScore extends Component {

  constructor(props) {
    super(props)

    this.state = {
      modifier: -1
    }

    this.updateModifier = this.updateModifier.bind(this);
  }

  updateModifier(score) {
    this.setState({ modifier: modifierHelper(score) })
  }

  render() {

    return (
      <div className="ability-score">
        <label>{this.props.name}</label>
          <span className="ability-score-modifier">{this.state.modifier}</span>
        <input
          type="number"
          defaultValue={this.props.score}
          onChange={ (e) => {
              this.props.dispatch(setAbilityScore(this.props.name, e.target.value))
              this.updateModifier(e.target.value)
            }
          }
        />
      </div>
    )
  }
 }

export default connect()(AbilityScore)