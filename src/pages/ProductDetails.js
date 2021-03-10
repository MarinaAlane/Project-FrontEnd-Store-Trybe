import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as api from '../services/api';
import Loading from '../Components/Loading/Loading';

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
    if (loading) return <Loading />;
    return (
      <div>
        <div>
          <Link to="/">
            <div>Voltar</div>
          </Link>
          <Link to="/ShoppingCart">
            <div>carrinho de compras</div>
          </Link>
        </div>
        <div data-testid="product-detail-name">
          <div data-testid="product">
            <h1>{ product[0].title }</h1>
            <img src={ product[0].thumbnail } alt={ `foto-${product[0].title}` } />
            <p>{ product[0].price }</p>
          </div>
        </div>
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
