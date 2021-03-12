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
    };

    this.filterProducts = this.filterProducts.bind(this);
    this.displayList = this.displayList.bind(this);
  }

 /*  componentDidUpdate() {
    this.filterProducts();
  } */

  async filterProducts() {
    marketAPI
      .getProductsFromCategoryAndQuery('MBL', this.searchedText)
      .then((productList) => this.setState((previousState) => ({ 
        products: [...previousState.products, productList]})));
  }

  async displayList() {
    await this.filterProducts();
    const { products } = this.state;
    console.log(products)
    const { results } = products;
    console.log(results)
    return (
      <section>
        {results.length === 0
          ? <section>não encontrado</section> 
          :results.map((product) => <ProductCard key={ product.id } product={ product }/>)}
      </section>
    );
  }

  render() {
    /* const { products } = this.state;
    const { results } = products;
    console.log(results);
    const list = results
      .map((product) => <ProductCard key={ product.id } product={ product }/>) */
    return (
      <div className="product-list">
        <input
          type="text"
          className="search-bar"
          data-testid="query-input"
          onChange={ (event) => { this.setState({ searchedText: event.target.value }); } }
        />
        <button
          type="button"
          onClick={ this.displayList }
          data-testid="query-button"
        >
          search
        </button>
        <ButtonCart />
        <AsideCategoriesList />
        <p data-testid="home-initial-message" className="product-list-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
      </div>
    );
  }
}

export default ProductList;
