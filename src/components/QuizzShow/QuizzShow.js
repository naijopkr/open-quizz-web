import React from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { fetchQuizz, saveQuizz, fetchAnswer } from '../../store/actions/quizz';
import QuizzQuestionForm from './QuizzQuestionForm';
import QuizzShowStart from './QuizzShowStart';
import QuizzQuestionAnswer from './QuizzQuestionAnswer';
import QuizzResults from './QuizzResults';

class QuizzShow extends React.Component {
  
  state = {
    question: -1,
    showQuizzAnswer: false,
    showResults: false,
    score: 0
  }

  componentDidMount = () => {
    this.props.fetchQuizz(this.props.match.params.id)
  }

  nextQuestion = () => {
    this.setState({ question: this.state.question + 1, showQuizzAnswer: false });
  }

  showAnswer = async () => {
    const i = this.state.question
    const userAnswer = this.props.takeQuizz.values.questions[i]
    const quizzData = {
      quizzId: this.props.quizz._id, 
      questionId: this.props.quizz.questions[i]._id 
    }
    await this.props.fetchAnswer(quizzData)
    
    if (this.props.answer && Number(userAnswer) === this.props.answer.rightAnswer) {
      this.setScore();
    }
    this.setState({ showQuizzAnswer: true });
  }

  setScore = () => {
    const score  = this.state.score + 1
    this.setState({ score });
  }

  saveQuizz = async () => {
    const userAnswer = { answers: this.props.takeQuizz.values, score: this.state.score };
    await this.props.saveQuizz(userAnswer, this.props.quizz, this.props.history);
    this.state.showResults = true;
  }

  renderContent = () => {
    const { quizz } = this.props
    switch (quizz) {
      case null:
        return null
      case false:
        return <h3>Quizz not found!</h3>
      default:
        return this.renderQuizz()
    }
  }

  renderQuizz = () => {
    const { question, showQuizzAnswer } = this.state
    let finish = false;
    if (question !== -1 && !this.props.quizz.questions[question + 1]) {
      finish = true;
    }

    switch (question) {
      case -1:
        return (
          <QuizzShowStart 
            onSubmit={this.nextQuestion}
            quizzTitle={this.props.quizz.title}
            totalQuestions={this.props.quizz.questions.length}
          />
        )
      default:
          return (
            showQuizzAnswer ?
            <QuizzQuestionAnswer
              onSubmit={!finish ? this.nextQuestion : () => this.saveQuizz()}
              question={this.props.quizz.questions[question]}
              answer={this.props.answer}
            /> :
            <QuizzQuestionForm 
              onSubmit={this.showAnswer} 
              question={this.props.quizz.questions[question]} 
            />
            
          )
    }
  }

  render() {
    return this.state.showResults
      ? <QuizzResults />
      : this.renderContent()
  }
}

const mapStateToProps = (
  { quizz, form: { takeQuizz }, answer }
) => ({ quizz, takeQuizz, answer })

const mapDispatchToProps = {
  fetchQuizz,
  saveQuizz,
  fetchAnswer
}

QuizzShow = reduxForm({
  form: 'takeQuizz',
  destroyOnUnmount: false
})(QuizzShow)

export default connect(mapStateToProps, mapDispatchToProps)(QuizzShow);