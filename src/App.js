import React from 'react';
import Search from './Search';
import * as api from './services/api';
import './App.css';

class App extends React.Component {
  render() {
    api.getCategories()
      .then((categories) => {
        console.log(categories);
      });
    return (
      <div className="App-header">
        <h1>Hello world!</h1>
        <Search />
      </div>
    );
  }
}

export default App;
