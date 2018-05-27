import React from 'react'
import { connect } from 'react-redux'
import AbilityScore from '../components/AbilityScore'
import { saveStateToFirebase }  from '../database/firebase'

const AbilityScores = ( {abilityScores} ) => {

 return (
    <div className="ability-scores">
        <form onSubmit={e => { e.preventDefault() }}>
          {
            abilityScores.map((ability, key) => {
                return <AbilityScore key={key} name={ability.name} score={ability.score} />
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