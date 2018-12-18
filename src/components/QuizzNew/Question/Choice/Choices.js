import React from 'react'
import Choice from './Choice'

const choices = ({ fields }) => {
  const choicesArray = fields.map((choice, index) => {
    return (
      <li key={index}>
        <Choice
         index={index}
         choice={choice}
         fields={fields} 
        />
      </li>
    );
  })

  return (
    <ul>
      {choicesArray}
      <li>
        <div className='card-panel grey lighten-5'>
          <div className='input-field'>
            <input 
              type="text" readOnly placeholder="Adicionar alternativa..." 
              onClick={() => fields.push()} />
          </div>
        </div>
      </li>
    </ul>
  )
}

export default choices