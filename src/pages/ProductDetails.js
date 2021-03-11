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
    console.log(this.props);
    const { match } = this.props;
    const { category, id } = match.params;
    const { location } = this.props;
    const { search } = location;
    const query = search.slice(1);
    const product = await api.getProductsFromCategoryAndQuery(category, query);
    const selectedProduct = product.results
      .find((value) => value.id === id);
    this.addProductOnState(selectedProduct);
  }

  addProductOnState(selectedProduct) {
    this.setState({ product: selectedProduct, loading: false });
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
            <h1>{ product.title }</h1>
            <img src={ product.thumbnail } alt={ `foto-${product.title}` } />
            <p>{ product.price }</p>
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
  location: PropTypes.objectOf({
    params: PropTypes.objectOf({
      search: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
