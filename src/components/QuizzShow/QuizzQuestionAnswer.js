import React from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

let QuizzQuestionAnswer = props => {
  const { handleSubmit, formValues, question, answer } = props;

  const userAnswerIndex = Number(formValues.questions[question.index]);
  const userAnswer = question.choices[userAnswerIndex].text;
  const gotRight = answer.rightAnswer === userAnswerIndex;
  const rightAnswer = question.choices[answer.rightAnswer].text;

  const bgColor = gotRight 
    ? 'light-green lighten-3 green-text text-darken-3' 
    : 'red lighten-4 red-text';
  
  const icon = gotRight
    ? <i className="fas fa-check"></i>
    : <i className="fas fa-times"></i>;

  return (
    
      <form onSubmit={handleSubmit}>
        <div className={`card ${bgColor}`}>
          <div className='card-content'>
            <span className='card-title'>
              {icon}{gotRight 
                ? (` Resposta certa!`)
                : ' Resposta errada!'}
            </span>
            <p>{question.question}</p>
          </div>
          <div className='card-action'>
            <h5>
              {gotRight 
                ? `Resposta: ${rightAnswer}` 
                : `Resposta certa: ${rightAnswer}` }
            </h5>
            {!gotRight 
              ? <p>{`Sua resposta: ${userAnswer}`}</p> 
              : ''
            }
            <div className='card-panel grey lighten-4'>
              <h6>
                {`Explicação: ${answer.explanation}`}
              </h6>
            </div>
          </div>
        </div>
        <div className='center'>
          <button className='btn green' type='submit'>Continuar</button> 
        </div>
      </form>
  );
}

QuizzQuestionAnswer = reduxForm({
  form: 'takeQuizz',
  destroyOnUnmount: false
})(QuizzQuestionAnswer);

QuizzQuestionAnswer = connect(
  state => {
    return ({
      formValues: state.form.takeQuizz.values
    });
  }
)(QuizzQuestionAnswer);

export default QuizzQuestionAnswer;