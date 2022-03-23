import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import Listhaewon from './pages/seulhaewon/List/List';
import Loginhaewon from './pages/seulhaewon/Login/Login';
import Signuphaewon from './pages/seulhaewon/Login/Signup';
import Detailhaewon from './pages/seulhaewon/Detail/Detail';
import Main from './pages/Main';

import './styles/reset.scss';
import './styles/common.scss';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login-haewon" element={<Loginhaewon />} />
        <Route path="/signup-haewon" element={<Signuphaewon />} />
        <Route path="/list-haewon" element={<Listhaewon />} />
        <Route path="/detail-haewon" element={<Detailhaewon />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
