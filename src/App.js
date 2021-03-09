import React from 'react';
import * as api from './services/api';

function App() {
  return (
    <div className="App">
      <h1>blabal</h1>
      {api.getCategories().then(categories => { console.log(categories) })}
    </div>
  );
}

export default App;
