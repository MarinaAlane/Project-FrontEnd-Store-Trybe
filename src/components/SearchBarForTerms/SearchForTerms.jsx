import React, { Component } from 'react';
import ProductTermPage from '../../pages/ProductTermPage/ProductTermPage';
import * as api from '../../services/api';
import SearchBar from '../SearchBar/SearchBar';

class SearchForTerms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: [],
      loading: true,
      inputValue: '',
    };
    this.getInputValue = this.getInputValue.bind(this);
  }

  componentDidMount(state) {
    api.getProductsFromCategoryAndQuery('', state)
      .then((term) => this.setState({ product: term, loading: false }));
  }

  getInputValue({ target }) {
    this.setState({ inputValue: target.value });
  }

  render() {
    const { product, loading, inputValue } = this.state;
    if (loading) return <p>loading</p>;
    return (
      <>
        <SearchBar
          getInputValue={ this.getInputValue }
          handleClick={ () => this.componentDidMount(inputValue) }
        />
        {product.results.map((term) => (<ProductTermPage
          key={ term.id }
          product={ term }
        />))}
      </>
    );
  }
}

export default SearchForTerms;
