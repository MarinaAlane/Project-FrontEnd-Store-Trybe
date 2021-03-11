import React from 'react';
import { getProductsFromCategoryAndQuery } from '../services/api';
import ListCategories from './ListCategories';
// import ProductDetais from './ProductDetais';
import Card from '../components/Card';

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
          onClick={ () => this.fetchProductsByQuery() }
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
        {products
          .map((product) => (
            <Card product={ product } key={ product.id } />
            // <Link
            //   data-testid="product-detail-link"
            //   key={ product.id }
            //   to={ { pathname: `/product/${product.id}`, state: { product } } }
            // >
            // </Link>
          ))}
        <ListCategories onChange={ this.fetchProductsByCategoryId } />
      </div>
    );
  }
}

export default LandingPage;
