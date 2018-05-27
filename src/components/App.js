import React from 'react'
import AbilityScores from '../containers/AbilityScores'
import SavingThrows from '../containers/SavingThrows'
import Skills from '../containers/Skills'
import CharacterWizard from '../containers/CharacterWizard'

const App = () => (
  <div>
    <h1>Rodney 'lil Rod'</h1>
    <CharacterWizard />
    <div className="character-sheet">
      <AbilityScores />
      <div>
        <SavingThrows />
        <Skills />
      </div>
    </div>
  </div>
)

export default App