import React, {Component} from 'react'
import {connect} from 'react-redux'
import { concatPropNames } from '../helpers/detailHelper'

class RaceDetails extends Component {

  render() {

    let details = this.props.details

    return (
      <div className="details">
        <p><label>Size:</label>{details.size}</p>
        <p><label>Speed:</label>{details.speed}</p>
        { concatPropNames('Traits', details.traits) }
        <p><label>Languages:</label>{details.language_desc}</p>
        { concatPropNames('Proficiences', details.starting_proficiencies) }
        <p><label>Age:</label>{details.age}</p>
        <p><label>Alignment:</label>{details.alignment}</p>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  attributes: state.attributes
})

export default connect(mapStateToProps)(RaceDetails)