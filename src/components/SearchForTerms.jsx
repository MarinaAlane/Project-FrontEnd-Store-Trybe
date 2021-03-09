import React, { Component } from 'react';
import ProductTermPage from './ProductTermPage';
import * as api from '../services/api';

class SearchForTerms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: [],
      loading: true,
    };
  }

  componentDidMount() {
    api.getProductsFromCategoryAndQuery('', 'carro')
      .then((term) => this.setState({ product: term, loading: false }));
  }

  render() {
    const { product, loading } = this.state;
    if (loading) return <p>loading</p>;

    return (
      product.results.map((term) => (<ProductTermPage
        data-testid="product"
        key={ term.id }
        product={ term }
      />))
    );
  }
}

export default SearchForTerms;
