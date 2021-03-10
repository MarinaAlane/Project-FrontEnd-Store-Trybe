import React from 'react';
import { Link } from 'react-router-dom';
import shopCart from '../images/shopCart.png';

import { getProductsFromCategoryAndQuery } from '../services/api';
import CreateCard from './CreateCard';

class SearchBar extends React.Component {
  constructor() {
    super();

    this.state = {
      productList: undefined,
      search: undefined,
    };

    this.getValue = this.getValue.bind(this);
  }

  // Altera o estado de search para o valor contido na searchBar
  getValue(event) {
    this.setState({
      search: event.target.value,
    });
  }

  async requestList() {
    const { search } = this.state;
    const reqList = await getProductsFromCategoryAndQuery('', search);
    this.setState({
      productList: reqList,
    });
  }

  render() {
    const { productList } = this.state;
    return (
      <>
        <div className="header">
          <input
            data-testid="query-input"
            type="text"
            className="search-bar-main"
            onChange={ this.getValue }
          />

          <button
            className="btn-search"
            data-testid="query-button"
            type="button"
            onClick={ () => this.requestList() }
          >
            Pesquisar
          </button>

          <Link to="/shopping-cart" data-testid="shopping-cart-button">
            <img
              src={ shopCart }
              alt="Imagem do carrinho de compras"
              className="shop-cart-main"
            />
          </Link>
        </div>

        <h4 data-testid="home-initial-message" className="message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h4>

        <div>
          { !productList ? <p>Nenhum produto foi encontrado</p>
            : productList.results.map((product) => (
              <CreateCard key={ product.id } product={ product } />)) }
        </div>
      </>
    );
  }
}

export default SearchBar;
