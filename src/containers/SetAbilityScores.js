import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setAbilityScore } from '../actions'

class SetAbilityScores extends Component {

  constructor(props) {
    super(props)

    this.state = {
      pointCosts: {"8": 0, "9": 1, "10": 2, "11": 3, "12": 4, "13": 5, "14": 7, "15": 9}
    }
  }

  getSum(total, num) {
      return total + num;
  }

  updateAbilityScore(ability, change) {
    let newScore = ability.score + change

    if(newScore <= 15 && newScore >= 8) {
      this.props.dispatch(setAbilityScore(ability.name, newScore))
    }
  }

  render() {

    let totalPointCost = this.props.abilityScores.map(ability =>
      this.state.pointCosts[ability.score.toString()]
    ).reduce(this.getSum)

    const STARTINGPOINTS = 27
    let remainingPoints = STARTINGPOINTS - totalPointCost
    let raceBonuses =  this.props.race.ability_bonuses

    return (
        <section className="set-ability-scores">
          <ul>
          {
            this.props.abilityScores.map((ability, index) => {

              let raceBonus = raceBonuses ? raceBonuses[index] : 0

              return <li key={index}>
                        <label>{ability.full_name}</label>
                        <button onClick={() => {this.updateAbilityScore(ability, 1)}}>+</button>
                        <span className={raceBonus > 0 ? "ability-score-bonus" : ""}>{ability.score + raceBonus}</span>
                        <button onClick={() => {this.updateAbilityScore(ability, -1)}}>-</button>
                      </li>
            })
          }
          </ul>

          <p className={remainingPoints < 0 ? "remaining-points alert" : "remaining-points"}>{remainingPoints}</p>
        </section>
    )
  }

}

const mapStateToProps = state => ({
  abilityScores: state.abilityScores,
  race: state.race
})

export default connect(mapStateToProps)(SetAbilityScores)