import React from 'react';

const IndexQuizzOwned = props => {
  const { quizzOwnedIndex } = props

  //Function fed to Array.prototype.reducer()
  const reducer = (acumulator, currentValue) => {
    return acumulator + currentValue;
  }

  const renderContent = () => {
    if (quizzOwnedIndex.length === 0) {
      return <div className='col s12'>You don't have any quizzes yet!</div>
    }

    return (
      quizzOwnedIndex.map(quizz => {
        return (
          <div key={quizz._id} className='col s12 quiz-card'>
            <div className='card'>
              <div className='card-content'>
                <span className='card-title'>{quizz.title}</span>
                <p>{quizz.description}</p>
                <p className='right'>
                  Criado em: {new Date(quizz.dateCreated).toLocaleDateString()}
                </p>
              </div>
              <div className='card-action'>
                <a className='green-text'>Respostas: {quizz.responses}</a>
                <a className='green-text'>
                  Média de acertos: {' '} 
                    {quizz.scores.length > 0 
                      ? Number(quizz.scores.reduce(reducer)/quizz.responses).toFixed(1)
                      : 0
                    }
                </a>
                <div className='right-align'>
                  <a className='btn green' href={`/takequizz/${quizz._id}`}>Ver Quizz</a>
                </div>
              </div>
            </div>
          </div>
        );
      })
    );
  }

  return (
    <div className='card'>
      <div className='quiz-index-title'>
        <h5 className='green-text'>Meus Quizzes</h5>
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

export default IndexQuizzOwned