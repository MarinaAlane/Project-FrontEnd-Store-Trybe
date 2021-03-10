import React from 'react';
import { getProductsFromCategoryAndQuery } from '../services/api';
import Card from '../components/Card';

class LandingPage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      products: [],
    };

    this.fetchProductsByQuery = this.fetchProductsByQuery.bind(this);
  }

  async fetchProductsByQuery(query) {
    const items = await getProductsFromCategoryAndQuery(false, query);
    this.setState({
      products: items.results,
    });
  }

  render() {
    const { products } = this.state;

    return (
      <div>
        <input type="text" data-testid="query-input" />
        <button
          type="button"
          data-testid="query-button"
          onClick={ () => this.fetchProductsByQuery('computador') }
        >
          Pesquisar
        </button>
        <h1 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h1>
        {products.map((product) => <Card product={ product } key={ product.id } />)}
      </div>
    );
  }
}

export default LandingPage;
