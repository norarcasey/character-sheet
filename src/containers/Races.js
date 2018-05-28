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
      let selectedRace = races[this.props.raceId -1]

        return (
            <div className="races">
              <ul>
                { races.map((race, index) => {
                    let raceId = index + 1

                    return <ListItem
                              key={raceId}
                              index={index}
                              name={race.name}
                              list={races}
                              className={raceId === this.props.raceId ? 'selected' : ''}
                              fetchDispatch={{ type: 'RACE_FETCH_REQUESTED', id: raceId}}
                              setDispatch={{ type: 'SET_RACE_ID', raceId: parseInt(raceId,10) }}
                              selectItem={() => { this.selectRace(index)}}
                            />
                })}
              </ul>

              {races.length > 0 && selectedRace.details ? (<RaceDetails details={selectedRace.details} />) : ""}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    races: state.races,
    raceId: state.raceId
})

export default connect(mapStateToProps)(Races)