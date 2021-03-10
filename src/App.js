import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import ProductList from './ProductList';

function App() {
  return (
    <BrowserRouter>
      <ProductList />
    </BrowserRouter>
  );
}

export default App;
