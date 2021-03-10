import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faSearch } from '@fortawesome/free-solid-svg-icons';
import * as api from '../services/api';
import ItemCard from './itemCard';
import CategoriesList from './categoriesList';

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      inputValue: '',
      categoryValue: '',
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleButton = this.handleButton.bind(this);
    this.handleCategory = this.handleCategory.bind(this);
  }

  handleInput({ target }) {
    this.setState({ inputValue: target.value });
  }

  handleCategory({ target }) {
    this.setState({ categoryValue: target.value });
    this.handleButton();
  }

  handleButton() {
    const { inputValue, categoryValue } = this.state;
    api.getProductsFromCategoryAndQuery(categoryValue, inputValue)
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
          <FontAwesomeIcon icon={ faSearch } />
        </button>
        <Link to="/emptyCart" data-testid="shopping-cart-button">
          <FontAwesomeIcon icon={ faShoppingCart } />
        </Link>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <CategoriesList handleCat={ this.handleCategory } />
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
