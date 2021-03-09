import React from 'react';
import * as api from './services/api';
import './App.css';

function App() {
  api.getCategories();
  return (
    <div>INICIO!!!</div>
  );
}

export default App;
