import React from 'react'
import SetAttributes from '../containers/SetAttributes'
import SavingThrows from '../containers/SavingThrows'

const App = () => (
  <div>
    <h1>Rodney 'lil Rod'</h1>
    <div className="character-sheet">
      <SetAttributes />
      <SavingThrows />
    </div>
  </div>
)

export default App