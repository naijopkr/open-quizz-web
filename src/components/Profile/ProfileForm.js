import React from 'react';
import { connect } from 'react-redux';
import { RenderField } from '../Util/RenderField'
import { Field, reduxForm } from 'redux-form';

let ProfileForm = props => {
  const { handleSubmit, submitting, onCancel } = props;
  
  return (
    <div className='container'>
      <div className='card'>
        <form onSubmit={handleSubmit}>
          <div className='card-content'>
            <div className='row'>
              <div className='col m6 s12'>
                <Field
                  name="firstName"
                  component={RenderField}
                  type="text"
                  label="First Name"
                />
              </div>
              <div className='col m6 s12'>
                <Field
                  name="lastName"
                  component={RenderField}
                  type="text"
                  label="Last Name"
                />
              </div>
              <div className='col m6 s12'>
                <Field
                  name="email"
                  component={RenderField}
                  type="email"
                  label="E-mail"
                />
              </div>
            </div>
          </div>
          <div className='card-action'>
            <button 
              type='button'
              className='red btn-flat white-text' 
              onClick={onCancel}>Voltar
            </button>
            <button className='green btn-flat right white-text' 
                    type='submit' disabled={submitting}>Salvar</button>
          </div>
        </form>
      </div>
    </div>
  )
}

const validate = values => {
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

  return errors;
}

ProfileForm = reduxForm({
  form: 'profileEdit',
  validate
})(ProfileForm);

ProfileForm = connect(state => {
  return { initialValues: state.auth }
})(ProfileForm);

export default ProfileForm;