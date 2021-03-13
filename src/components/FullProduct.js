import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class FullProduct extends Component {
  render() {
    const { match: { params: { id } } } = this.props;
    const product = JSON.parse(localStorage.getItem(id));
    const { title, price, thumbnail } = product;

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
    }),
  }).isRequired,
};

export default FullProduct;
