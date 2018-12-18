import React from 'react'
import M from 'materialize-css'
import { Field, FieldArray } from 'redux-form'
import { RenderFieldQuizz } from '../../Util/RenderField'
import Choices from './Choice/Choices'
import RightChoice from './Choice/RightChoice'

const question = ({ fields, question, index }) => {
  return (
    <div className='card-panel grey lighten-4'>
      <button
        className='red btn-flat white-text right'
        type='button'
        title='Eliminar questão'
        onClick={() => fields.remove(index)} 
      >
        <i className="fas fa-trash-alt"></i>
      </button>
      <h4>Questão #{index + 1}</h4>
      <Field 
        autoFocus={true}
        name={`${question}.question`}
        type='text'
        component={RenderFieldQuizz}
        label='Enunciado'
      />
      <Field 
        name={`${question}.explanation`}
        type='text'
        component={RenderFieldQuizz}
        label='Explicação'
      />
      <FieldArray name={`${question}.choices`} 
      component={Choices} 
      />
      <div>
        <h5>Resposta Correta</h5>
        <div className='input-field'>
          <select 
           component='select' 
           name={`${question}.rightAnswer`} 
           className='browser-default grey lighten-5'
           ref={ el => M.FormSelect.init(el) }>
            <FieldArray name={`${question}.choices`} component={RightChoice} />
          </select>
        </div>
      </div>
    </div>
  )
}

export default question