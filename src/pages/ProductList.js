import React from 'react';
import { Link } from 'react-router-dom';
import * as mlbAPI from '../services/api';
import Categories from '../components/Categories';
import Products from '../components/Products';

class ProductsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      products: [],
    };
    this.changeHandler = this.changeHandler.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.fetchProductQuery = this.fetchProductQuery.bind(this);
  }

  handleClick() {
    this.fetchProductQuery();
  }

  changeHandler(event) {
    this.setState({ searchText: event.target.value });
  }

  async fetchProductQuery() {
    const { searchText } = this.state;
    const { results } = await mlbAPI.getProductsFromCategoryAndQuery('', searchText);
    this.setState({
      products: results,
    });
  }

  render() {
    const { searchText, products } = this.state;

    return (
      <div>
        <Link data-testid="shopping-cart-button" to="/meucarrinho">carrinho</Link>
        <input
          data-testid="query-input"
          value={ searchText }
          onChange={ (event) => this.changeHandler(event) }
        />
        <button
          data-testid="query-button"
          type="button"
          onClick={ this.handleClick }
        >
          Pesquisar
        </button>
        <h3 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h3>
        <Products products={ products } />
        <Categories />
      </div>
    );
  }
}

export default ProductsList;
