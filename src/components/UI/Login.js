import React from 'react';

import './Login';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [namelog, setNamelog] = useState(' ');
  const [passlog, setPasslog] = useState(' ');
  const [home, setHome] = useState(false);

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    let name = localStorage.getItem('anelName');
    let pass = localStorage.getItem('anelPass').replace(/"/g, '');

    if (name === namelog || pass === passlog) {
      setHome(true);
      console.log(setHome);
    } else {
      console.log('Nije Tacan Unos');
    }
  };

  if (home) {
    if (home === true);
    navigate('/Expens');
  }

  return (
    <div className='reg'>
      <form onSubmit={handleLogin}>
        <div className='input-container'>
          <label>Username </label>
          <input
            type='text'
            name='name'
            required
            onChange={(event) => setNamelog(event.target.value)}
          />
        </div>
        <div className='input-container'>
          <label>Password </label>
          <input
            type='password'
            name='pass'
            required
            onChange={(event) => setPasslog(event.target.value)}
          />
        </div>
        <div className='button-container'>
          <input type='submit' />
        </div>
      </form>
    </div>
  );
};

export default Login;
