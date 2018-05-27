import React from 'react'

export const concatPropNames = (name, propArray) => {
  if(propArray.length < 1) return ''
  let propNames = propArray.map((p) => p.name)
  return <p><label>{name}:</label>{propNames.join(', ')}</p>
}

export const concatAbilityBonus = (bonusArray, abilityScores) => {

}