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
  }

  componentDidMount() {
    this.getProductId();
  }

  async getProductId() {
    const { match: { params: { id } } } = this.props;
    const url = `https://api.mercadolibre.com/items/${id}`;
    const { title, attributes, thumbnail, price } = await fetch(url)
      .then((response) => response.json());
    this.setState({
      title,
      attributes,
      thumbnail,
      price,
      loading: false,
      id,
    });
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
    const { title, attributes, thumbnail, price, id } = this.state;
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
            <button type="button" data-testid="shopping-cart-button">ShoppingCart</button>
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
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};
