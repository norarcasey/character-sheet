import React from 'react'
import Attribute from '../components/Attribute'
import { connect } from 'react-redux'
import { saveState } from '../actions'

const SetAttributes = ({dispatch}) => {
 
 return (
    <div className="attributes-container">
        <form onSubmit={e => { e.preventDefault() }}>
            <Attribute name="Strength" />
            <Attribute name="Dexterity" />
            <Attribute name="Constitution" />
            <button onClick={(e) =>  dispatch(saveState())}>Save State</button>
        </form>
    </div>
    )
}


export default connect()(SetAttributes)