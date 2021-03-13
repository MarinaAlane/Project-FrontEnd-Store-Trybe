import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import RatingForm from '../components/RatingForm';

export default class ProductDetails extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      shoppingCart: [],
    };

    this.addOnCart = this.addOnCart.bind(this);
    this.checkStorage = this.checkStorage.bind(this);
  }

  componentDidMount() {
    this.getProductId();
    this.checkStorage();
  }

  getProductId() {
    const {
      location: { state: { id, price, thumbnail, title, attributes } },
    } = this.props;
    this.setState({
      title,
      attributes,
      thumbnail,
      price,
      loading: false,
      id,
    });
  }

  checkStorage() {
    if (sessionStorage.shoppingCart) {
      const cart = JSON.parse(sessionStorage.shoppingCart);
      this.setState({
        shoppingCart: [...cart],
      });
    }
  }

  addOnCart(title, id, price) {
    this.setState((state) => ({
      shoppingCart: [...state.shoppingCart, { title, id, price }],
    }), () => {
      const { shoppingCart } = this.state;
      sessionStorage.setItem('shoppingCart', JSON.stringify(shoppingCart));
    });
  }

  render() {
    const { loading } = this.state;
    if (loading) {
      return (
        <div>Loading...</div>
      );
    }
    const { title, attributes, thumbnail, price, id, shoppingCart } = this.state;
    return (
      <div>
        <div className="productContainer">
          <h2 data-testid="product-detail-name">{ title }</h2>
          <img src={ thumbnail } alt={ title } />
          <p>
            R$
            { price }
          </p>
          <button
            type="button"
            data-testid="product-detail-add-to-cart"
            onClick={ () => this.addOnCart(title, id, price) }
          >
            Adicionar ao Carrinho
          </button>
          <Link to="/shoppingCart">
            <button
              type="button"
              data-testid="shopping-cart-button"
            >
              ShoppingCart
              <span data-testid="shopping-cart-size">{` - ${shoppingCart.length}`}</span>
            </button>
          </Link>
          <ul>
            {attributes.map((attribute) => (
              <li key={ attribute.id }>
                { `${attribute.name} -> ${attribute.value_name}` }
              </li>
            ))}
          </ul>
        </div>
        <RatingForm />
      </div>
    );
  }
}

ProductDetails.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      id: PropTypes.string,
      price: PropTypes.number,
      thumbnail: PropTypes.string,
      title: PropTypes.string,
      attributes: PropTypes.arrayOf(PropTypes.object),
    }),
  }).isRequired,
};
