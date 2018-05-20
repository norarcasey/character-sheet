import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setAttribute } from '../actions'
import { modifierHelper } from '../helpers/modifierHelper'


class Attribute extends Component {

  constructor(props) {
    super(props)

    this.state = {
      props: props,
      modifier: 0
    }

    this.updateModifier = this.updateModifier.bind(this);
  }

  updateModifier(score) {
    this.setState({ modifier: modifierHelper(score) })
  }

  render() {
    let props = this.state.props

    return (
      <div className="attribute-container">
        <label>{props.name}</label>
          <span className="attribute-modifier">{this.state.modifier}</span>
        <input
          type="number"
          onChange={ (e) => {
              props.dispatch(setAttribute(props.name, e.target.value))
              this.updateModifier(e.target.value)
            }
          }
        />
      </div>
    );
  }
 }

export default connect()(Attribute)