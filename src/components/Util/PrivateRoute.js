import React from 'react'
import { Route, Redirect } from 'react-router-dom'


const privateRoute = ({ component: Component, ...rest, auth }) => {
  return (
    <Route {...rest} render={props => {
      switch (auth) {
        case null:
          return null
        case false:
          return <Redirect to={{ pathname: '/login', state: { lastPath: rest.path } }} />
        default:
          return <Component {...props} />
      }
    }} />)
}

export default privateRoute