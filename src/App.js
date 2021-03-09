import React from 'react';
import * as api from './services/api'
import './App.css';

class App extends React.Component {
  render() {
    api.getCategories().then(categories => { console.log(categories) })
    return (
      <div>
        <h1>Hello world!</h1>
      </div>
    );
  }
}

export default App;
