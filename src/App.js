import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>

        <input type="text" placeholder="Digite aqui" />

        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>

      </div>
    );
  }
}

export default App;
