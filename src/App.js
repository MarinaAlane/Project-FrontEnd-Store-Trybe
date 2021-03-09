import React from 'react';
import './App.css';
import * as api from './services/api'

function App() {
  api.getCategories();
  return (
    <div className="App">
    </div>
  );
}

export default App;
