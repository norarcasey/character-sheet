import React from 'react'
import { connect } from 'react-redux'
import SavingThrow from '../components/SavingThrow'

const SavingThrows = ({ attributes }) => {

  console.log(attributes)

  return (
    <div className="saving-throws">
      {
        attributes.map( (attr) => {
          return (<SavingThrow name={attr.text} score={attr.score} />)
        })
      }
    </div>
  )
}

const mapStateToProps = state => ({
  attributes: state.attributes
})

export default connect(mapStateToProps)(SavingThrows)