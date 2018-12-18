import React from 'react';

const IndexQuizzTaken = props => {
  const { quizzTakenIndex } = props

  const renderContent = () => {
    if (quizzTakenIndex.length === 0) {
      return <div className='col s12'>You haven't taken any quizzes yet</div>
    }

    return quizzTakenIndex.map(quizz => {
      return (
        <div key={quizz._id} className='quiz-card col s12'>
          <div className='card'>        
            <div className='card-content'>
              <span className='card-title'>{quizz._quizz.title}</span>
              <p>{quizz._quizz.description}</p>
              <p className='right'>
                Feito em: {new Date(quizz.dateTaken).toLocaleDateString()}
              </p>
            </div>
            <div className='card-action'>
              <a className='green-text'>Acertos: {quizz.score}</a>
              <a className='green-text'>{`Total de questões: ${quizz._quizz.questions.length}`}</a>
              <div>
                <a className='green-text'>
                  {`Pontuação: ${Number((quizz.score/quizz._quizz.questions.length)*100).toFixed(1)}%`}
                </a>
              </div>
            </div>
          </div>
        </div>
      )
    })
  }

  return (
    <div className='card'>
      <div className='quiz-index-title'>
        <h5 className='green-text'>Quizzes respondidos</h5>
      </div>
      <div className='divider'></div>
      <div className='grey lighten-5'>
        <div className='row'>
          {renderContent()}
        </div>
      </div>
    </div>
  );

}

export default IndexQuizzTaken