import React from 'react';
import { reduxForm, Field } from 'redux-form';

const QuizzQuestionForm = props => {
  const { handleSubmit, question } = props;
  
  const choices = question.choices.map(choice => {
    return (
      <p key={choice.index}>
        <label htmlFor={`${choice.index}`}>
          <Field 
            className='with-gap'
            name={`questions[${question.index}]`}
            id={`${choice.index}`}
            type='radio'
            component='input'
            value={`${choice.index}`}
            required
          />
          <span>{choice.text}</span>
        </label>
      </p>
    )
  })

  return (
    <form onSubmit={handleSubmit} className='card-panel'>
      <h4>{question.question}</h4>
      {choices}
      <div className='center'>
        <button className='btn green' type='submit'>Responder</button> 
      </div>
    </form>
  );
}

export default reduxForm({
  form: 'takeQuizz',
  destroyOnUnmount: false
})(QuizzQuestionForm);