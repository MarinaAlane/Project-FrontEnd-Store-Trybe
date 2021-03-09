import React, { Component } from 'react';

class Home extends Component {
  render() {
    const message = (
      <span data-testid="home-initial-message">
        Digite algum termo de pesquisa ou escolha uma categoria.
      </span>
    );
    return (
      <div>
        <input type="text" />
        { message }
      </div>
    );
  }
}
export default Home;
