import React from 'react';
import { Link } from 'react-router-dom';
import * as api from '../services/api';
import Categories from '../components/Categories';
import Products from '../components/Products';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryId: '',
      searchText: '',
      products: [],
    };
    this.changeHandler = this.changeHandler.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.fetchProductIdAndQuery = this.fetchProductIdAndQuery.bind(this);
    this.getCategory = this.getCategory.bind(this);
  }

  // componentDidMount() {
  //   this.fetchProductIdAndQuery();
  // }
  // Se descomentar o codigo acima quebra o req4 e req6 passa; vice-versa;

  handleClick() {
    this.fetchProductIdAndQuery();
  }

  async getCategory(category) {
    const productsList = await this.fetchProductId(category);
    this.setState({ categoryId: category, products: productsList });
  }

  async fetchProductId(productId) {
    const { results } = await api.getProductsFromCategory(productId);
    return results;
  }

  async fetchProductIdAndQuery() {
    const { searchText, categoryId } = this.state;
    const { results } = await api.getProductsFromCategoryAndQuery(categoryId, searchText);
    this.setState({ products: results });
  }

  changeHandler(event) {
    this.setState({ searchText: event.target.value });
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
        <Categories getCategory={ this.getCategory } />
      </div>
    );
  }
}

export default Home;
