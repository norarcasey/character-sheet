import React from 'react'
import Attribute from '../components/Attribute'

const SetAttributes = () => {
 
 return (
    <div className="attributes-container">
        <form onSubmit={e => { e.preventDefault() }}>
            <Attribute name="Strength" />
            <Attribute name="Dexterity" />
            <Attribute name="Constitution" />
        </form>
    </div>
    )
}


export default SetAttributes