import React, {Component} from 'react'
import {connect} from 'react-redux'
import { concatPropNames } from '../helpers/detailHelper'

class ClassDetails extends Component {

  render() {

    let details = this.props.details

    return (
      <div className="details">
        <p><label>Hit Die:</label>1d{details.hit_die}</p>
        { concatPropNames('Saving Throws', details.saving_throws) }
        { concatPropNames('Proficiences', details.proficiencies) }
        { concatPropNames('Subclasses', details.subclasses) }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  abilityScores: state.abilityScores
})

export default connect(mapStateToProps)(ClassDetails)