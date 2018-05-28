import React, { Component } from 'react'
import { connect } from 'react-redux'

class SetAbilityScores extends Component {

  constructor(props) {
    super(props)

    this.state = {
      remainingPointsToSpend: 27
    }
  }

  render() {
    return (
        <div className="set-ability-scores">
          <span>{this.state.remainingPointsToSpend}</span>

          <section className="ability-score-toggles">
            {
              this.props.abilityScores.map((ability) => {
                return <ul><li>
                          <label>{ability.full_name}</label>
                          <button>+</button>
                          <span>{ability.score}</span>
                          <button>-</button>
                        </li></ul>
              })
            }

          </section>
        </div>
    )
  }

}

const mapStateToProps = state => ({
  abilityScores: state.abilityScores
})

export default connect(mapStateToProps)(SetAbilityScores)