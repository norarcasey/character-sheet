import React, { Component } from 'react'
import { connect } from 'react-redux'

class ListItem extends Component {

  render() {

    let props = this.props

    return (
      <li
        className={props.className}
        onClick={() => {

          if(!props.list[props.index].details) {
            this.props.dispatch(props.fetchDispatch)
          }

          props.selectItem()
          this.props.dispatch(props.setDispatch)
      }}
      >{props.name}</li>
    )
  }

}

export default connect()(ListItem)