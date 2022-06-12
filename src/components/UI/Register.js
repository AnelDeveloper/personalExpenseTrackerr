import React from 'react';
import './Register.css';

import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

const Register = () => {
  const [name, setName] = useState('');
  const [pass, setPass] = useState('');
  const [confirmPass, setConfirmPass] = useState('');
  const [login, setLogin] = useState(false);

  const navigate = useNavigate();

  if (login) {
    if (login === true) {
      navigate('/Login');
    }
  }

  const onSubmit = (e) => {
    e.preventDefault();

    if (pass === confirmPass) {
      localStorage.setItem('anelName', JSON.stringify(name));
      localStorage.setItem('anelPass', JSON.stringify(pass));
      console.log('Saved in Local Storage');

      if (onSubmit) {
        if (pass === confirmPass) {
          setLogin(true);
          console.log('ide Gas');
        }
      }
    }
  };

  return (
    <div className='reg'>
      <form onSubmit={onSubmit}>
        <div className='input-container'>
          <label>Username </label>
          <input
            type='text'
            name='name'
            required
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div className='input-container'>
          <label>Password </label>
          <input
            type='password'
            name='pass'
            required
            onChange={(event) => setPass(event.target.value)}
          />
        </div>
        <div className='input-container'>
          <label>Password </label>
          <input
            type='password'
            name='confirmPass'
            required
            onChange={(event) => setConfirmPass(event.target.value)}
          />
        </div>
        <div className='button-container'>
          <input type='submit' />
        </div>
      </form>
    </div>
  );
};

export default Register;
