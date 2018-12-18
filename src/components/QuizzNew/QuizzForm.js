import React from 'react';
import { FieldArray, Field, reduxForm } from 'redux-form';
import { RenderFieldQuizz } from '../Util/RenderField'
import Questions from './Question/Questions'

const QuizzForm = (props) => {
  const { handleSubmit, submitting } = props;
  return (
    <div className='card-panel'>
      <form onSubmit={handleSubmit} style={{ margin: 10 }}>
        <div style={{ marginBottom: 10, paddingTop: 10 }}>
          <Field
            autoFocus={true}
            name="title"
            component={RenderFieldQuizz}
            type="text"
            label="Nome do Quizz"
          />
        </div>
        <div style={{ marginBottom: 10 }}>
          <Field
            name="description"
            component={RenderFieldQuizz}
            type="text"
            label="Descrição"
          />
        </div>
        <div>
          <FieldArray name='questions' component={Questions} />
        </div>
        <div className='center'>
          <button className='green btn-flat white-text' 
                  type='submit' disabled={submitting}>Salvar</button>
        </div>
      </form>
    </div>
  );
}

export default reduxForm({
  form: 'quizzForm'
})(QuizzForm);