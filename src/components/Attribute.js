import React from 'react'
import { connect } from 'react-redux'
import { setAttribute } from '../actions'


const Attribute = ({ name, dispatch }) => (
    <div className="attribute-container">
        <label>{name}</label>
        <span className="attribute-modifier">3</span>
        <input type="number" onChange={ (e) => dispatch(setAttribute(name, e.target.value)) } />
    </div>
)

export default connect()(Attribute)