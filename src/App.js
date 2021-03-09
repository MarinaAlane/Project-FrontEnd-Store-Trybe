import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import ProductList from './components/ProductList';
// import fetchAPI from './services/api';

function App() {
  return (
    <BrowserRouter>
      <Route path="/" component={ ProductList } />
    </BrowserRouter>

  );
}

export default App;
