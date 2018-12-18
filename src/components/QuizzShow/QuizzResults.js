import React from 'react';
import { connect } from 'react-redux';

const QuizzResults = props => {
  const { quizzResults } = props;
  const quizz = quizzResults._quizz;
  const totalQuestions = quizz.questions.length || 0;
  
  return (
    <div className='card-panel'>
      <h5>{`Resutados do Quizz: ${quizz.title}`}</h5>
      <p>{`Acertos: ${quizzResults.score}`}</p>
      <p>{`Total de questões: ${totalQuestions}`}</p>
      <p>{`Pontuação: ${Number((quizzResults.score/totalQuestions)*100).toFixed(1)}%`}</p>
      <div className='center'>
        <a href='/' className='btn green'>Página inicial</a>
      </div>
    </div>
  );
}

export default connect(state => {
  return ({
    quizzResults: state.quizzTaken
  });
})(QuizzResults)