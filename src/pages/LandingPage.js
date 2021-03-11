import React from 'react';
import { getProductsFromCategoryAndQuery } from '../services/api';
import Card from '../components/Card';
import ListCategories from './ListCategories';

class LandingPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
      search: '',

    };

    this.fetchProductsByQuery = this.fetchProductsByQuery.bind(this);
    this.fetchProductsByCategoryId = this.fetchProductsByCategoryId.bind(this);
    this.hendleChange = this.hendleChange.bind(this);
    this.inputButton = this.inputButton.bind(this);
  }

  async fetchProductsByQuery() {
    const { search } = this.state;
    const items = await getProductsFromCategoryAndQuery(false, search);
    this.setState({
      products: items.results,
    });
  }

  async fetchProductsByCategoryId(categoryId) {
    const items = await getProductsFromCategoryAndQuery(categoryId, false);
    this.setState({
      products: items.results,
    });
  }

  hendleChange(event) {
    const { value } = event.target;
    this.setState({
      search: value,
    });
  }

  inputButton() {
    return (
      <>
        <input type="text" data-testid="query-input" onChange={ this.hendleChange } />
        <button
          type="button"
          data-testid="query-button"
          onClick={ () => this.fetchProductsByQuery('computador') }
          // onClick={ () => this.fetchProductsByCategoryId('MLB1744') }
        >
          Pesquisar
        </button>
      </>
    );
  }

  render() {
    const { products } = this.state;

    if (products.length === 0) {
      return (
        <>
          { this.inputButton() }
          <h1 data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </h1>
          <ListCategories onChange={ this.fetchProductsByCategoryId } />
        </>
      );
    }

    return (
      <div>
        { this.inputButton() }
        {products.map((product) => <Card product={ product } key={ product.id } />)}
        <ListCategories onChange={ this.fetchProductsByCategoryId } />
      </div>
    );
  }
}

export default LandingPage;
