import React from 'react'

const rightChoice = ({ fields }) => {
  return (
    fields.map((option, index) => {
      return (
        <option key={index} value={index}>{`Alternativa  #${index + 1}`}</option>
      );
    })
  )
}

export default rightChoice