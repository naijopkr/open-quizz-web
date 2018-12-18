import React from 'react'
import { Field } from 'redux-form'
import { RenderFieldQuizz } from '../../../Util/RenderField'

const choice = ({ fields, choice, index }) => {
  return (
    <div className='card-panel grey lighten-5' style={{ padding: 10 }}>
      <div className='row' style={{ margin: 0 }}>
        <div className='col s11'>
          <Field
            autoFocus={true}
            name={choice}
            type='text'
            component={RenderFieldQuizz}
            label={`Alternativa #${index + 1}`}
            style={{ margin: 0 }}
          />
        </div>
        <div className='col s1'>
          <a
            className='waves-effect waves-teal btn-flat'
            title='Eliminar alternativa'
            onClick={() => fields.remove(index)}   
          >
            <i className="far fa-trash-alt"></i>
          </a>
        </div>
      </div>
    </div>
  )
}

export default choice