import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './ProductCard.css';
import { FaCartPlus } from 'react-icons/fa';
import Cart from '../../services/Data';

class ProductCard extends Component {
  constructor() {
    super();

    this.addCartItem = this.addCartItem.bind(this);
  }

  addCartItem(product) {
    const check = Cart.some((value) => value.title === product.title);
    if (check) {
      Cart.forEach((cartItem) => {
        if (cartItem.title === product.title) {
          cartItem.quantity += 1;
        }
      });
    } else {
      const { title, thumbnail, price } = product;
      Cart.push({
        title,
        thumbnail,
        price,
        quantity: 1,
      });
    }
  }

  render() {
    const { product, text } = this.props;
    const { title, thumbnail, price, category_id: CategoryId, id } = product;
    return (
      <li data-testid="product" className="productCardContainer">
        <Link
          data-testid="product-detail-link"
          to={ {
            pathname: `/${CategoryId}/${id}`,
            search: text } }
          className="linkProductCard"
        >
          <h4>{ title }</h4>
          <img src={ thumbnail } alt={ `foto-${title}` } />
          <p>{ price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }) }</p>
        </Link>
        <button
          type="button"
          data-testid="product-add-to-cart"
          onClick={ () => this.addCartItem(product) }
        >
          Adicionar ao carrinho
          <FaCartPlus />
        </button>
      </li>
    );
  }
}

ProductCard.propTypes = {
  product: PropTypes.objectOf().isRequired,
  text: PropTypes.string.isRequired,
};

export default ProductCard;
