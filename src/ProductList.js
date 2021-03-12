import React, { Component } from 'react';
import ButtonCart from './components/shopping_cart/ButtonCart';
import AsideCategoriesList from './components/AsideCategoriesList';
import QueryButton from './components/QueryButton';
import * as marketAPI from './services/api.js';


class ProductList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchedText: '',
    }

    this.filterProducts = this.filterProducts.bind(this);
  };

  filterProducts() {
    marketAPI.getProductsFromCategoryAndQuery("MBL",this.searchedText).then((searchedText) => this.setState( { searchedText }))
  }


  render() {
    return (
      <div className="product-list">
        <input
          type="text"
          className="search-bar"
          data-testid="query-input"
          onChange= {(event) => {this.setState({ searchedText: event.target.value })} }
        />
        <QueryButton />
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
