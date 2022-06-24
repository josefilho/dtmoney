import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Dashboard from '../pages/Dashboard';

export const Router: React.FC = () => (
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/dashboard' element={<Dashboard />} />
  </Routes>
);
