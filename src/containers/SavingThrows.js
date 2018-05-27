import React from 'react'
import { connect } from 'react-redux'
import SavingThrow from '../components/SavingThrow'
import { modifierHelper } from '../helpers/modifierHelper'

const SavingThrows = ({ abilityScores, proficiencyBonus }) => {

  return (
    <div className="saving-throws">
      <h2>Saving Throws</h2>
      {
        abilityScores.map( (ability, index) => {
          let modifier = modifierHelper(ability.score)
          return (
            <SavingThrow
              key={index}
              abilityScore={ability}
              modifier={modifier}
              proficiencyBonus={proficiencyBonus}
            />
          )
        })
      }
    </div>
  )
}

const mapStateToProps = state => ({
  abilityScores: state.abilityScores,
  proficiencyBonus: state.proficiencyBonus
})

export default connect(mapStateToProps)(SavingThrows)