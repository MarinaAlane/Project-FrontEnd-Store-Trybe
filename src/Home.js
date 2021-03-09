import React from 'react';
import ProductList from './ProductList';
import * as api from './services/api';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      queryInput: '',
      products: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.fetchSearch = this.fetchSearch.bind(this);
  }

  componentDidMount() {
    this.fetchSearch();
  }

  handleChange({ target }) {
    const { value } = target;
    this.setState({
      queryInput: value,
    });
  }

  async fetchSearch() {
    const { queryInput } = this.state;
    const data = await api.getProductsFromCategoryAndQuery('', queryInput);
    this.setState({
      products: data.results,
    });
  }

  render() {
    const { queryInput, products } = this.state;
    return (
      <section>
        <label htmlFor="Digite" data-testid="home-initial-message">
          <input
            type="text"
            value={ queryInput }
            onChange={ this.handleChange }
            data-testid="query-input"
          />
          Digite algum termo de pesquisa ou escolha uma categoria.
        </label>
        <button
          type="button"
          data-testid="query-button"
          onChange={ this.fetchSearch }
        >
          Procurar
        </button>
        {(products.length > 0) ? <ProductList products={ products } />
          : <p>Nenhum produto foi encontrado</p>}
        <Link to="/shoppingcart" data-testid="shopping-cart-button">CARRINHO</Link>
      </section>
    );
  }
}

export default Home;
