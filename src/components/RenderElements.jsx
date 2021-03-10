import React from 'react';
import { Link } from 'react-router-dom';
import ProductList from './ProductList';

class RenderElements extends React.Component {
  render() {
    const { products, handleClick, handleInputChange } = this.props;
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
        <input
          type="text"
          data-testid="query-input"
          onChange={ handleInputChange }
        />
        <button type="button" data-testid="query-button" onClick={ handleClick }>
          PESQUISAR
        </button>
        <ProductList products={ products } />
      </div>
    );
  }
}

export default RenderElements;
