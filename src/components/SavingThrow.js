import React from 'react'
import { modifierHelper } from '../helpers/modifierHelper'

const SavingThrow = ({name, score}) => {
    return (
        <div className="saving-throw">
            <input type="radio" />
            <input type="number" defaultValue={ modifierHelper(score) } />
            <label>{name}</label>
        </div>
    )
}

export default SavingThrow