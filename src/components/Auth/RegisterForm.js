import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { RenderField } from '../Util/RenderField'

const RegisterForm = props => {
  const { handleSubmit, submitting } = props;
  return (
    <div className='card'>
      <div className='card-content'>
        <span className='card-title'>Ainda não tem conta? Faça seu registro:</span>
        <form onSubmit={handleSubmit}>
          <div className='row'>
            <div className='col s6'>
              <Field
                name="firstName"
                component={RenderField}
                type="text"
                label="Primeiro Nome"
              />
            </div>
            <div className='col s6'>
              <Field
                name="lastName"
                component={RenderField}
                type="text"
                label="Sobrenome"
              />
            </div>
            <div className='col s12'>
              <Field
                name="email"
                component={RenderField}
                type="email"
                label="E-mail"
              />
            </div>
            <div className='col s12'>
              <Field
                name="password"
                component={RenderField}
                type="password"
                label="Senha"
              />
            </div>
          </div>
          <div className='center'>
            <button className='green btn-flat white-text' 
                    type='submit' disabled={submitting}>Registrar</button>
          </div>
        </form>
      </div>
    </div>
  );
}

const validate = (values) => {
  const errors = {};
  if(!values.lastName) {
    errors.lastName = 'Sobrenome é um campo obrigatório'
  }
  if(!values.firstName) {
    errors.firstName = 'Primeiro nome é um campo obrigatório'
  }

  if (!values.email) {
    errors.email = 'E-mail é um campo obrigatório'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Endereço de e-mail inválido'
  }

  if (!values.password) {
    errors.password = 'Senha é um campo obrigatório'
  } else if (values.password.length < 8) {
    errors.password = 'Senha deve ter pelo menos 8 caracteres.'
  }
  return errors;
}

export default reduxForm({
  form: 'registerForm',
  validate
})(RegisterForm);