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
      value: '',
    };
  }

  componentDidMount() {
    api.getProductsFromCategoryAndQuery('', 'carro')
      .then((term) => this.setState({ product: term, loading: false }));
  }

  handleInputChange() {
    this.setState({ value: 'teste' });
  }

  render() {
    const { product, loading } = this.state;
    if (loading) return <p>loading</p>;

    return (
      <>
        {product.results.map((term) => (<ProductTermPage
          data-testid="product"
          key={ term.id }
          product={ term }
        />))}
        <SearchBar onInputChange={ this.handleInputChange } />
      </>
    );
  }
}

export default SearchForTerms;
