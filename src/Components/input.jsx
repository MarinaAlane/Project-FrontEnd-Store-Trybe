import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faSearch } from '@fortawesome/free-solid-svg-icons';
import ItemList from './itemList';


class Input extends Component {
  render() {
    return (
      <div>
        <input type="text" name="searchText" data-testid="query-input" id="query-input"/>
        <button onClick={this.keyCheck} data-testid="query-button">
          <FontAwesomeIcon icon={faSearch} />
        </button>
        <Link to="/emptyCart" data-testid="shopping-cart-button">
          <FontAwesomeIcon icon={faShoppingCart} />
        </Link>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <ItemList category="" searchText="teste" />
      </div>
    );
  }
}

export default Input;
