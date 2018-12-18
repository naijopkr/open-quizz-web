import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom'
import * as actions from '../../store/actions/auth'
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm'; 

class AuthPage extends Component {

  login = (values) => {
    this.props.submitLogin(values, this.props.history, this.props.location.state.lastPath);
  }

  register = (values) => {
    this.props.submitRegister(values);
  }

  render() {
    if (this.props.auth) {
      return <Redirect to='/' />
    }
    return(
      <div className='row'>
        <div className='col m6 s12'>
          <LoginForm onSubmit={this.login} />
        </div>
        <div className='col m6 s12'>
          <RegisterForm onSubmit={this.register} />
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({ auth: state.auth })

const mapDispatchToProps = {
  submitLogin: actions.submitLogin, 
  submitRegister: actions.submitRegister
}

AuthPage = withRouter(AuthPage)

export default connect(mapStateToProps, mapDispatchToProps)(AuthPage);