import React from 'react';
import { connect } from 'react-redux';
import RaceDetails from '../components/RaceDetails';
import races from '../data/races';

const Races = ({ dispatch, selectedRace }) => {
  return (
    <div className="races">
      <ul>
        {races.map((race, index) => {
          return (
            <li
              key={index}
              className={race.index === selectedRace.index ? 'selected' : ''}
              onClick={() => dispatch({ type: 'SET_RACE', race: race })}
            >
              {race.name}
            </li>
          );
        })}
      </ul>

      {races.length > 0 && selectedRace ? (
        <RaceDetails details={selectedRace} />
      ) : (
        ''
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  selectedRace: state.race
});

export default connect(mapStateToProps)(Races);
