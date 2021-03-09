import React from 'react';
import './App.css';
import * as api from './services/api';

function App() {
  return (
    <div className="App">
      {api.getCategories().then((categories) => { console.log(categories); })}
    </div>
  );
}

export default App;
