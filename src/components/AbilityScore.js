import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setAbilityScore } from '../actions'

class AbilityScore extends Component {

  constructor(props) {
    super(props)
  }

  render() {

    return (
      <div className="ability-score">
        <label>{this.props.full_name}</label>
        <span className="ability-score-modifier">{this.props.modifier}</span>
        <input
          type="number"
          value={this.props.score}
          onChange={ (e) => {
              this.props.dispatch(setAbilityScore(this.props.name, e.target.value))
            }
          }
        />
      </div>
    )
  }
 }

export default connect()(AbilityScore)