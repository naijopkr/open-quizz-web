import React from 'react'
import Question from './Question'

const questions = ({ fields }) => {
  const questionsArray = fields.map((question, index) => {
    return (
      <li key={index}>
        <Question 
         question={question} 
         index={index}
         fields={fields} />
      </li>
    )
  })

  return (
    <ul>
      {questionsArray}
      <li>
        <button
          className='green btn-flat white-text' 
          type='button' onClick={() => fields.push({})}>
          Adicionar questão
        </button>
      </li>
    </ul>
  )
}

export default questions