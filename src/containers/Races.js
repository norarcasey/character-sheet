import React, { Component } from 'react'
import { connect } from 'react-redux'
import RaceDetails from '../components/RaceDetails'

class Races extends Component {

    constructor(props) {
        super(props)

        props.dispatch({type: 'RACES_FETCH_REQUESTED'})

        this.state = {
          selectedRaceIndex: 0
        }

        this.selectRace = this.selectRace.bind(this);
    }

    selectRace(index) {
      this.setState({ selectedRaceIndex: parseInt(index, 10) -1 })
    }

    render() {

      let races = this.props.races
      let selectedRace = races[this.state.selectedRaceIndex]

        return (
            <div className="races">
              <select
                  name="race-select"
                  id="race-select"
                  className="race-select"
                  size={races.length}
                  onChange={ (e) => {
                        let raceId = e.target.value

                        if(!races[raceId - 1].details) {
                          this.props.dispatch({ type: 'RACE_FETCH_REQUESTED', id: raceId})
                        }

                        this.selectRace(e.target.value)
                      }}>
                  {
                      races.map((race, i) => {
                          let index = i+1
                          return <option key={index} value={index} selected={index === 1}>{race.name}</option>
                      })
                  }
              </select>
              {races.length > 0 && selectedRace.details ? (<RaceDetails details={selectedRace.details} />) : ""}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    races: state.races
})

export default connect(mapStateToProps)(Races)