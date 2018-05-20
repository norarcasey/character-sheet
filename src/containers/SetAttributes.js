import React from 'react'
import Attribute from '../components/Attribute'
import { saveStateToFirebase }  from '../database/firebase'

const SetAttributes = () => {
 
 return (
    <div className="attributes-container">
        <form onSubmit={e => { e.preventDefault() }}>
            <Attribute name="Strength" />
            <Attribute name="Dexterity" />
            <Attribute name="Constitution" />
            <button onClick={(e) =>  saveStateToFirebase()}>Save State</button>
        </form>
    </div>
    )
}

export default SetAttributes