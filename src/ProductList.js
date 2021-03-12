import React, { Component } from 'react';
import ButtonCart from './components/shopping_cart/ButtonCart';
import AsideCategoriesList from './components/AsideCategoriesList';
import * as marketAPI from './services/api';
import ProductCard from './components/ProductCard';

class ProductList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchedText: '',
      products: [],
      loaded: false,
    };

    this.getProductsFromAPI = this.getProductsFromAPI.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const { target } = event;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;

    this.setState({
      [name]: value,
    });
  }

  getProductsFromAPI() {
    this.setState({ loaded: false });
    const { searchedText } = this.state;
    marketAPI.getProductsFromCategoryAndQuery('MLB', searchedText)
      .then((products) => {
        this.setState({ products });
        this.setState({ loaded: true });
      });
  }

  generateProductCards() {
    const { products } = this.state;
    const { results } = products;
    return (
      <section>
        {results.length === 0
          ? <section>não encontrado</section>
          : results
            .map((product) => <ProductCard key={ product.id } product={ product } />)}
      </section>
    );
  }

  render() {
    const { loaded } = this.state;
    return (
      <div className="product-list">
        <input
          type="text"
          className="search-bar"
          data-testid="query-input"
          name="searchedText"
          onChange={ this.handleInputChange }
        />
        <button
          type="button"
          onClick={ this.getProductsFromAPI }
          data-testid="query-button"
        >
          search
        </button>
        <ButtonCart />
        <AsideCategoriesList />
        <p data-testid="home-initial-message" className="product-list-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        {loaded ? this.generateProductCards() : false}
      </div>
    );
  }
}

export default ProductList;
