import React, { Component } from 'react'
import { connect } from 'react-redux'

class Races extends Component {

    constructor(props) {
        super(props)

        props.dispatch({type: 'RACES_FETCH_REQUESTED'})
    }

    render() {
        return (
            <div className="races">
                <label htmlFor="race-select">Race</label>{ ' ' }
                <select
                    name="race-select"
                    id="race-select"
                    onChange={ (e) => { this.props.dispatch({ type: 'RACE_FETCH_REQUESTED', id: e.target.value})}}>
                    {
                        this.props.races.map((race, i) => {
                            let index = i+1
                            return <option key={index} value={index}>{race.name}</option>
                        })
                    }
                </select>

            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    races: state.races
})


export default connect(mapStateToProps)(Races)