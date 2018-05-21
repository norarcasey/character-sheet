import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setAttribute } from '../actions'
import { modifierHelper } from '../helpers/modifierHelper'


class Attribute extends Component {

  constructor(props) {
    super(props)

    this.state = {
      modifier: 0
    }

    this.updateModifier = this.updateModifier.bind(this);
  }

  updateModifier(score) {
    this.setState({ modifier: modifierHelper(score) })
  }

  render() {

    return (
      <div className="attribute-container">
        <label>{this.props.name}</label>
          <span className="attribute-modifier">{this.state.modifier}</span>
        <input
          type="number"
          onChange={ (e) => {
              this.props.dispatch(setAttribute(this.props.name, e.target.value))
              this.updateModifier(e.target.value)
            }
          }
        />
      </div>
    )
  }
 }

export default connect()(Attribute)