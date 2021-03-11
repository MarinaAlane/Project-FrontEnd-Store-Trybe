import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FaCartPlus, FaInfoCircle } from 'react-icons/fa';
import dataCart from '../services/dataCart';

class ItemCard extends Component {
  constructor(props) {
    super(props);
    this.handlerState = this.handlerState.bind(this);
  }

  handlerState(products) {
    dataCart.push(products);
  }

  render() {
    const { products } = this.props;
    const { title, price, thumbnail, id } = products;
    return (
      <div data-testid="product">
        <h2>{ title }</h2>
        <img src={ thumbnail } alt={ title } />
        <p>{ `R$ ${price.toFixed(2)}` }</p>
        <Link
          to={ {
            pathname: `/details/${id}`,
            state: { products },
          } }
          data-testid="product-detail-link"
        >
          <FaInfoCircle />
        </Link>
        <button
          type="button"
          data-testid="product-add-to-cart"
          onClick={ () => this.handlerState(products) }
        >
          <FaCartPlus />
        </button>
      </div>
    );
  }
}

ItemCard.propTypes = {
  products: PropTypes.shape({
    title: PropTypes.string,
    price: PropTypes.number,
    thumbnail: PropTypes.string,
    id: PropTypes.string,
  }).isRequired,
};

export default ItemCard;
