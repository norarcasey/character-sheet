import React from 'react'

const SavingThrow = ({ attribute, modifier }) => {

  return (
    <div className="saving-throw">
        <input
          type="checkbox"
          value="2" // TODO: Use actual proficiency value
        />
        <span>{ modifier }</span>
        <label>{ attribute.text }</label>
    </div>
  )

}

export default SavingThrow