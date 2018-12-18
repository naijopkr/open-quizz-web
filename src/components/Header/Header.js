import React from 'react';

const header = ({ auth }) => {

  const renderContent = () => {
    if (!auth) {
      return;
    }
    return [
      <li key="1"><a href="/profile">{auth.firstName}</a></li>,
      <li key="2"><a href="/logout">Logout</a></li>
    ];
  }

  return (
    <nav className='green accent-4'>
      <div className='nav-wrapper'>
        <a href='/'
              className='center brand-logo'>
          OpenQuizz
        </a>
        <ul id="nav-mobile" className="right">
          {renderContent()}
        </ul>
      </div>
    </nav>
  );
}

export default header;