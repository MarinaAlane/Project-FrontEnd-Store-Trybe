import React, { Component } from 'react';
import ButtonCart from './components/shopping_cart/ButtonCart';
import AsideCategoriesList from './components/AsideCategoriesList';
/* import QueryButton from './components/QueryButton'; */
import * as marketAPI from './services/api.js';
import SearchLogo from '../src/components/search_logo.svg';


class ProductList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchedText: '',
    }

    this.filterProducts = this.filterProducts.bind(this);
    this.displayList = this.displayList.bind(this);
  };

  componentDidUpdate() {
    this.filterProducts();
  }

  filterProducts() {
    marketAPI.getProductsFromCategoryAndQuery("MBL", this.searchedText).then((searchedText) => this.setState( { searchedText }))
  }

  displayList() {
    const { searchedText } = this.state;
    const { results } = searchedText;
    results.map((element)=> console.log(element) );
  }

  render() {
    return (
      <div className="product-list">
        <input
          type="text"
          className="search-bar"
          data-testid="query-input"
          onChange= {(event) => {
            this.setState({ searchedText: event.target.value })} }
        />
        <img src={ SearchLogo } alt="Query button" onClick={this.displayList} data-testid="query-button" />
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
