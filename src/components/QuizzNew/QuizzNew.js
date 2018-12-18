import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createQuizz } from '../../store/actions/quizz';
import QuizzForm from './QuizzForm';
import QuizzNewSuccess from './QuizzNewSuccess';

class QuizzNew extends Component {
  state = { success: false }

  submit = async (values) => {
    const success = await this.props.createQuizz(values);
    this.setState({ success: success });
  }

  render() {
    return this.state.success
      ? <QuizzNewSuccess {...this.props} />
      : <QuizzForm onSubmit={this.submit} />
  }
}

const mapDispatchToProps = {
  createQuizz
}

export default connect(null, mapDispatchToProps)(QuizzNew);