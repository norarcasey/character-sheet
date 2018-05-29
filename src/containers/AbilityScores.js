import React from 'react'
import { connect } from 'react-redux'
import AbilityScore from '../components/AbilityScore'
import { saveStateToFirebase }  from '../database/firebase'
import { modifierHelper } from '../helpers/modifierHelper'

const AbilityScores = ( {abilityScores} ) => {

 return (
    <div className="ability-scores">
        <form onSubmit={e => { e.preventDefault() }}>
          {
            abilityScores.map((ability, key) => {
              let modifier = modifierHelper(ability.score)

              return <AbilityScore
                        key={key}
                        name={ability.name}
                        full_name={ability.full_name}
                        score={ability.score}
                        modifier={modifier}
                      />
            })
          }

          <button onClick={(e) =>  saveStateToFirebase()}>Save State</button>
        </form>
    </div>
  )
}

const mapStateToProps = state => ({
    abilityScores: state.abilityScores
})

export default connect(mapStateToProps)(AbilityScores)