import { HomePage } from './HomePage/HomePage';
import { TablePage } from './TablePage/TablePage';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/table' element={<TablePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
