import React, { Component } from 'react'
import { connect } from 'react-redux'
import RaceDetails from '../components/RaceDetails'
import ListItem from '../components/ListItem'

class Races extends Component {

    constructor(props) {
        super(props)

        if(props.races.length === 0) {
            props.dispatch({type: 'RACES_FETCH_REQUESTED'})
        }
    }

    render() {

      let races = this.props.races
      let selectedRace = races[this.props.race.index - 1]

        return (
            <div className="races">
              <ul>
                { races.map((race, index) => {

                    return <li  key={index}
                                className={race.index === this.props.race.index ? 'selected' : ''}
                                onClick={() => this.props.dispatch({ type: 'SET_RACE', race: race })}>
                                {race.name}
                            </li>
                })}
              </ul>

              {races.length > 0 && selectedRace ? (<RaceDetails details={selectedRace} />) : ""}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    races: state.races,
    race: state.race
})

export default connect(mapStateToProps)(Races)