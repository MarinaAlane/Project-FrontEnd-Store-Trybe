import React from 'react';
import { Link } from 'react-router-dom';

class RenderElements extends React.Component {
  render() {
    return (
      <div>
        <input type="text" />
        <h4 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h4>
        <button type="button">
          <Link to="/cart" data-testid="shopping-cart-button">
            Cart
          </Link>
        </button>
      </div>
    );
  }
}

export default RenderElements;
