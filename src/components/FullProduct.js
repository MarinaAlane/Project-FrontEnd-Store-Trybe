import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as Api from '../services/api';

class FullProduct extends Component {
  constructor(props) {
    super(props);

    this.state = {
      price: 0,
      thumbnail: '',
    };
    this.loadProduct = this.loadProduct.bind(this);
  }

  componentDidUpdate() {
    this.loadProduct();
  }

  async loadProduct() {
    const { match: { params: { id } } } = this.props;
    const product = await Api.getProductFromId(id);
    this.setState({
      price: product.price,
      thumbnail: product.thumbnail,
    });
  }

  render() {
    const { match: { params: { title } } } = this.props;
    const { price, thumbnail } = this.state;

    return (
      <div>
        <Link to="/">Voltar</Link>
        <Link to="/cart">Carrinho</Link>
        <div className="title" data-testid="product-detail-name">
          <span>{ title }</span>
          <span className="title">
            - R$
            { price }
          </span>
        </div>
        <img className="products-image" src={ thumbnail } alt={ title } />
      </div>
    );
  }
}

FullProduct.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
    }),
  }).isRequired,
};

export default FullProduct;
