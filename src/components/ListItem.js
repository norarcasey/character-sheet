import React, { Component } from 'react'
import { connect } from 'react-redux'

class ListItem extends Component {

  render() {

    let props = this.props

    return (
      <li
        className={props.className}
        onClick={() => {
          this.props.dispatch(props.setDispatch)
        }}
      >{props.name}</li>
    )
  }

}

export default connect()(ListItem)