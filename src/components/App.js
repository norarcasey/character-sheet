import React from 'react';
import AbilityScores from '../containers/AbilityScores';
import CharacterLevel from '../components/CharacterLevel';
import CharacterName from '../components/CharacterName';
import SavingThrows from '../containers/SavingThrows';
import Skills from '../containers/Skills';
import CharacterWizard from '../containers/CharacterWizard';

const App = () => (
  <div>
    <div className="character-data">
      <CharacterName />
      <CharacterLevel />
    </div>
    <CharacterWizard />
    <div className="character-sheet">
      <AbilityScores />
      <div>
        <SavingThrows />
        <Skills />
      </div>
    </div>
  </div>
);

export default App;
