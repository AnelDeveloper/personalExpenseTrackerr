import React from 'react';

import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Expens from './components/UI/Expenses';
import Login from './components/UI/Login';

import Register from './components/UI/Register';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/Login' element={<Login />} />
          <Route path='/' element={<Register />} />
          <Route path='/Expens' element={<Expens />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
