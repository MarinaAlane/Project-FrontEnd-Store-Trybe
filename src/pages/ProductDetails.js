import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as api from '../services/api';

export default class ProductDetails extends Component {
  constructor(state) {
    super(state);
    this.state = {
      product: {},
      loading: true,
    };
  }

  async componentDidMount() {
    const { match } = this.props;
    await api.getProductsFromCategoryAndQuery(match.params.category, '')
      .then((data) => {
        const filtredProduct = data
          .results
          .filter((result) => result.id === match.params.id);

        this.setState({ product: filtredProduct, loading: false });
      });
  }

  render() {
    const { product, loading } = this.state;
    if (loading) return (<div>Carregando...</div>);
    return (
      <div data-testid="product-detail-name">
        {product[0].title}
      </div>
    );
  }
}

ProductDetails.propTypes = {
  match: PropTypes.objectOf({
    params: PropTypes.objectOf({
      id: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
