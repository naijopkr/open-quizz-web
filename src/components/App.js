import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchUser } from '../store/actions/auth';

//Import components
import Header from './Header/Header';
import ProfileShow from './Profile/ProfileShow'
import QuizzShow from './QuizzShow/QuizzShow';
import Dashboard from './Dashboard/Dashboard';
import AuthPage from './Auth/AuthPage';
import PrivateRoute from './Util/PrivateRoute'

const privateRoutes = [
  {
    path: '/',
    component: Dashboard
  },
  {
    path: '/profile',
    component: ProfileShow
  },
  {
    path: '/takequizz/:id',
    component: QuizzShow
  }
]

class App extends Component {
  componentDidMount = () => {
    this.props.fetchUser()
  }

  renderPrivateRoutes = () => {
    return privateRoutes.map((route, index) => {
      return <PrivateRoute exact path={route.path} 
        component={route.component} 
        auth={this.props.auth}
        key={index} />
    })
  }

  render(){
    const { auth } = this.props
    return (
      <BrowserRouter>
        <div className='container'>
          <Header auth={auth} />
          <Route exact path='/login' 
            render={props => <AuthPage {...props} />}  
          />
          {this.renderPrivateRoutes()}
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => ({ auth: state.auth })

const mapDispatchToProps = { fetchUser }

export default connect(mapStateToProps, mapDispatchToProps)(App);