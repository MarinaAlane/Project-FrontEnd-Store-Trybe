import React, { Component } from 'react';
import './Home.css';

class Home extends Component {
  render() {
    const message = (
      <h5
        data-testid="home-initial-message"
        className="defaultMessage"
      >
        Digite algum termo de pesquisa ou escolha uma categoria.
      </h5>
    );
    return (
      <div>
        <input type="text" className="searchInput" />
        { message }
      </div>
    );
  }
}
export default Home;
