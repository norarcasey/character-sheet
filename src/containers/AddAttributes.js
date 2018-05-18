import React from 'react'
import Attribute from '../components/Attribute'

// title
// value
// modifier

const AddAttributes = () => (
    <div>
        <form onSubmit={e => { e.preventDefault() }}>
            <Attribute name="Strength" />
            <Attribute name="Dexterity" />
            <Attribute name="Constitution" />
        </form>
    </div>
)

export default AddAttributes