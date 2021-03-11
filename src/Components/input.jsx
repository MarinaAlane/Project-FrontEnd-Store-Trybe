import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaSearch } from 'react-icons/fa';
import * as api from '../services/api';
import ItemCard from './itemCard';

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      inputValue: '',
      id: '',
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleButton = this.handleButton.bind(this);
  }

  handleInput({ target }) {
    this.setState({ inputValue: target.value });
  }

  handleButton() {
    const { id, inputValue } = this.state;
    api.getProductsFromCategoryAndQuery(id, inputValue)
      .then((queryValue) => {
        this.setState({ products: queryValue });
      });
  }

  render() {
    const { products, inputValue } = this.state;
    return (
      <div>
        <input
          value={ inputValue }
          type="text"
          data-testid="query-input"
          onChange={ this.handleInput }
        />
        <button type="button" data-testid="query-button" onClick={ this.handleButton }>
          <FaSearch />
        </button>
        <Link to="/cart" data-testid="shopping-cart-button">
          <FaShoppingCart />
        </Link>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <div>
          {products.length < 1 ? <p>Nenhum produto foi encontrado</p>
            : products.results.map((item) => (
              <ItemCard key={ item.id } products={ item } />))}
        </div>
      </div>
    );
  }
}

export default Input;

// removido item list do component input
// item list deve ser renderizado após receber input e não junto do input
// adicionado type no button
// estrutura component input ok, necessita function para submit do input
