import React from 'react';

const ProfileData = props => {
  const { onEdit, auth } = props;
  
  return (
    <div className='container'>
      <div>
        <h4>{auth.firstName + ' ' + auth.lastName}
          <span>
            <button
              className='btn-flat white' 
              type='button' 
              onClick={onEdit}><i className="fas fa-edit grey-text"></i>
            </button>
          </span>
        </h4>
      </div>
      <div>
        <label>E-mail:</label>
        <div>{auth.email}</div>
      </div>
    </div>
  )

}

export default ProfileData;