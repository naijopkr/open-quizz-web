import React from 'react'
import { reduxForm, Field } from 'redux-form'
import { RenderField } from '../Util/RenderField'

const LoginForm = props => {
  const { handleSubmit, submitting } = props
  return (
    <div className='card'>
      <div className='card-content'>
        <span className='card-title'>Já tem conta? Faça seu login:</span>
        <form onSubmit={handleSubmit}>
          <div className='row'>
            <div className='col s12'>
              <Field
                name="email"
                id='email'
                component={RenderField}
                type="text"
                label="E-mail"
              />
            </div>
            <div className='col s12'>
              <Field
                name="password"
                id='password'
                component={RenderField}
                type="password"
                label="Senha"
              />
            </div>
          </div>
          <div className='center'>
            <button className='green btn-flat white-text' 
                    type='submit' disabled={submitting}>Entrar</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default reduxForm({
  form: 'loginForm'
})(LoginForm)