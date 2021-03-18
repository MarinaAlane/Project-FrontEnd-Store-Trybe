import React, { Component } from 'react';
import '../App.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ProductDetails extends Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { location } = this.props;
    const { details } = location.state;
    const previousList = this.loadCartList();
    previousList.push(details);
    localStorage.setItem('cartList', JSON.stringify(previousList));
  }

  loadCartList() {
    let previousList = localStorage.getItem('cartList');
    if (previousList === null) {
      previousList = [];
      return previousList;
    }
    return JSON.parse(previousList);
  }

  render() {
    const { location } = this.props;
    const { details } = location.state;
    const { title, price, thumbnail, sold_quantity: soldQuantity } = details;

    return (
      <div className="product-detail">
        <h2 data-testid="product-detail-name">{ `${title} - R$${price}` }</h2>
        <img alt={ `${title}` } src={ thumbnail } className="product-image" />
        <div className="specs">
          <h4>Especificações</h4>
          <p>{ `Unidades vendidas: ${soldQuantity}` }</p>
        </div>
        <div>
          <button
            data-testid="product-detail-add-to-cart"
            type="button"
            onClick={ this.handleClick }
          >
            Adicionar ao Carrinho
          </button>
        </div>
        <Link to="/cart" data-testid="shopping-cart-button">CARRINHO</Link>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      details: PropTypes.shape({
        title: PropTypes.string,
        price: PropTypes.number,
        thumbnail: PropTypes.string,
        sold_quantity: PropTypes.number,
      }),
    }),
  }).isRequired,
};

export default ProductDetails;
