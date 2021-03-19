import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FaCartPlus, FaInfoCircle } from 'react-icons/fa';
import dataCart from '../services/dataCart';
// import dataCounter from '../services/dataCounter';

class ItemCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      array: dataCart.array,
    };
    this.addCart = this.addCart.bind(this);
  }

  addCart(products) {
    const { globalCounter } = this.props;
    const { array } = this.state;
    const { title, price, thumbnail, id } = products;

    if (array.some((productItem) => products.id === productItem.id)) {
      array.forEach((productItem) => {
        if (productItem.id === products.id) {
          productItem.quantity += 1;
          globalCounter();
        }
      });
    } else {
      dataCart.array.push({ title, price, thumbnail, id, quantity: 1 });
      globalCounter();
    }
  }

  render() {
    const { products, cartCounter } = this.props;

    const { title, price, thumbnail, id } = products;
    return (

      <div data-testid="product">
        <h2>{ title }</h2>
        <img src={ thumbnail } alt={ title } />
        <p>{ `R$ ${price.toFixed(2)}` }</p>
        <Link
          to={ {
            pathname: `/details/${id}`,
            state: { products, cartCounter },
          } }
          data-testid="product-detail-link"
        >
          <FaInfoCircle />
        </Link>
        <button
          type="button"
          data-testid="product-add-to-cart"
          onClick={ () => this.addCart(products) }
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
