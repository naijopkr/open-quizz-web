import React, { Component } from 'react';
import { connect } from 'react-redux'
import { indexQuizzOwned, indexQuizzTaken } from '../../store/actions/quizz'
import IndexQuizzOwned from './IndexQuizzOwned';
import IndexQuizzTaken from './IndexQuizzTaken';
import QuizzNew from '../QuizzNew/QuizzNew';
import './dashboard.css'

class Dashboard extends Component {

  state = { newQuizz: false }

  componentDidMount = () => {
    this.props.indexQuizzOwned()
    this.props.indexQuizzTaken()
  }

  renderIndexOwned = () => {
    const { quizzOwnedIndex } = this.props
    switch (quizzOwnedIndex) {
      case null:
        return <h3>Loading...</h3>
      case false:
        return <h3>You don't have quizzes yet!</h3>
      default:
        return <IndexQuizzOwned quizzOwnedIndex={quizzOwnedIndex} />
    }
  }

  renderIndexTaken = () => {
    const { quizzTakenIndex } = this.props
    switch (quizzTakenIndex) {
      case null:
        return <h3>Loading...</h3>
      case false:
        return <h3>You haven't taken any quizzes yet</h3>
      default:
        return <IndexQuizzTaken quizzTakenIndex={quizzTakenIndex} />
    }
  }

  render() {
    return this.state.newQuizz
    ? <QuizzNew />
    : (
      <div className='row'>
        <div className='col s12'>{this.renderIndexOwned()}</div>
        <div className='col s12'>{this.renderIndexTaken()}</div>
        <div className='fixed-action-btn'>
          <button 
           onClick={() => this.setState({ newQuizz: true })} 
           className="btn-floating btn-large waves-effect waves-light green accent-4"
          >
            <i className="fas fa-plus"></i>
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({ 
  quizzOwnedIndex: state.quizzOwnedIndex,
  quizzTakenIndex: state.quizzTakenIndex 
})

const mapDispatchToProps = {
  indexQuizzOwned,
  indexQuizzTaken
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)