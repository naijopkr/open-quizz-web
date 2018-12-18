import React from 'react';
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

let QuizzNewSuccess = props => {
  const { quizz } = props;
  console.log(props)
  console.log(window.location.href)
  return (
    <div className='card-panel'>
      <h4>Quizz salvo com sucesso!</h4>
      <h5>{quizz.title}</h5>
      <div>Utilize o link abaixo para compartilhar seu quizz</div>
      <div>
        <a href={`/takequizz/${quizz._id}`}>
          {`http://openquizz.com/takequizz/${quizz._id}`}
        </a>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({ quizz: state.quizz })

QuizzNewSuccess = withRouter(QuizzNewSuccess)

export default connect(mapStateToProps)(QuizzNewSuccess);