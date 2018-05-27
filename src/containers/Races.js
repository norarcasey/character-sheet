import React, { Component } from 'react'
import { connect } from 'react-redux'

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
      let selectedRace = this.props.races[this.state.selectedRaceIndex]
      console.log("THE RENDER RACES", races)

        return (
            <div className="races">
              <select
                  name="race-select"
                  id="race-select"
                  className="race-select"
                  size={this.props.races.length}
                  onChange={ (e) => {
                        this.props.dispatch({ type: 'RACE_FETCH_REQUESTED', id: e.target.value})
                        this.selectRace(e.target.value)
                      }}>
                  {
                      this.props.races.map((race, i) => {
                          let index = i+1
                          return <option key={index} value={index} selected={index === 1}>{race.name}</option>
                      })
                  }
              </select>

              <div className="details">
                <p>
                  <label>Name:</label>{ races.length > 0 ? selectedRace.name : "No Name"}
                </p>
                <p>
                  <label>Age:</label>{ races.length > 0 && selectedRace.details ? selectedRace.details.age : "no age"}
                </p>
                <p>
                  <label>Alignment:</label>{ races.length > 0 && selectedRace.details ? selectedRace.details.alignment : "no alignment"}
                </p>
              </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    races: state.races
})


export default connect(mapStateToProps)(Races)