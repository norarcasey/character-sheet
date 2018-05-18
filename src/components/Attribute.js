import React from 'react'

const Attribute = ({ name }) => (
    <div className="attribute-container">
        <label>{name}</label>
        <span className="attribute-modifier">3</span>
        <input type="number" max="99" />
    </div>
)

export default Attribute