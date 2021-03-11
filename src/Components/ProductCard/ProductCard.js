import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './ProductCard.css';
import Cart from '../../services/Data';

class ProductCard extends Component {
  constructor() {
    super();

    this.addCartItem = this.addCartItem.bind(this);
  }

  addCartItem(product) {
    Cart.push(product);
    console.log(Cart);
    // localStorage.setItem('produto', JSON.stringify(product));
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
          Adicionar ao carinho
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
