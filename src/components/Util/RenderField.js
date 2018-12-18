import React from 'react'

export const RenderField = ({ input, type, label, meta }) => {
  const id = `${meta.form}[${input.name}]`
  return (
    <div className='input-field'>
      <input {...input} id={id} type={type} />
      <label htmlFor={id}>{label}</label>
      {meta.touched && meta.error && <span className='red-text'>{meta.error}</span>}
    </div>
  )
}

export const RenderFieldQuizz = ({ input, label, type, autoFocus, meta }) => {
  const id = `${meta.form}[${input.name}]`
  return (
    <div className='input-field'>
      <input {...input} id={id} type={type} autoFocus={autoFocus} required />
      <label htmlFor={id}>{label}</label>
    </div>
  );
}