import React from 'react';
import { reduxForm } from 'redux-form';

const QuizzShowStart = props => {
  const { handleSubmit, quizzTitle, totalQuestions } = props;
  
  return (
    <form className='card-panel' onSubmit={handleSubmit}>
      <div className='panel'>
        <h5>{`Quizz: ${quizzTitle}`}</h5>
        <h6>{`Total de questões: ${totalQuestions}`}</h6>
      </div>
      <div className='center'>
        <button className='btn green' type='submit'>Começar</button> 
      </div>
    </form>
  );
}

export default reduxForm({
  form: 'takeQuizz'
})(QuizzShowStart);