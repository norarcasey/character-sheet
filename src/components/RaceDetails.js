import React, {Component} from 'react'
import {connect} from 'react-redux'
import { concatPropNames } from '../helpers/detailHelper'

class RaceDetails extends Component {

  render() {

    let details = this.props.details

    return (
      <div className="details">
        {getAbilityBonus(details.ability_bonuses, this.props.abilityScores)}
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

const getAbilityBonus = (bonusArray, abilityScores) => {

  let results = bonusArray.map((value, index) => {
      return value > 0 ? `${abilityScores[index].name} +${value}` : false
  }).filter(value => value)

  return <p><label>Ability Bonuses:</label><span>{results.join(', ')}</span></p>
}

const mapStateToProps = state => ({
  abilityScores: state.abilityScores
})

export default connect(mapStateToProps)(RaceDetails)