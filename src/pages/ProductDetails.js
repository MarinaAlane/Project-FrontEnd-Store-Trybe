import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ProductDetails extends Component {
  constructor(props) {
    super(props);

    this.updateState = this.updateState.bind(this);
    this.getFromLocalStorage = this.getFromLocalStorage.bind(this);
    this.putOnLocalStorage = this.putOnLocalStorage.bind(this);

    this.state = {
      product: {},
    };
  }

  componentDidMount() {
    this.updateState();
    this.getFromLocalStorage();
  }

  getFromLocalStorage() {
    if (localStorage.getItem('cartItems')) {
      const items = localStorage.getItem('cartItems');
      return JSON.parse(items);
    }
    return [];
  }

  putOnLocalStorage(product) {
    const products = [...this.getFromLocalStorage()];
    products.push(product);
    console.log(products);
    localStorage.setItem('cartItems', JSON.stringify(products));
  }

  updateState() {
    const { history: { location: { state } } } = this.props;
    this.setState({
      product: state,
    });
  }

  render() {
    const { product } = this.state;
    return (
      <div>
        <Link to="/cart" data-testid="shopping-cart-button">
          <img src="cart-icon.png" alt="cart-icon" />
        </Link>
        <h1 data-testid="product-detail-name">{product.title}</h1>
        <button
          type="button"
          props={ product }
          data-testid="product-detail-add-to-cart"
          onClick={ () => this.putOnLocalStorage(product) }
        >
          Adicionar ao carrinho
        </button>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  history: PropTypes.shape({
    location: PropTypes.shape({
      state: {},
    }).isRequired,
  }).isRequired,
};

export default ProductDetails;
