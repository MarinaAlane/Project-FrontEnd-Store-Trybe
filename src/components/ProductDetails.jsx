import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as api from '../services/api';
import RatingForm from './RatingForm';

class ProductDetails extends React.Component {
  constructor() {
    super();
    this.fetchCategory = this.fetchCategory.bind(this);
    this.addToCart = this.addToCart.bind(this);

    this.state = {
      product: [],
      shoppingCart: [],
    };
  }

  componentDidMount() {
    this.fetchCategory();
  }

  async fetchCategory() {
    const { match: { params: { categoryID, id } } } = this.props;
    const productObj = await api.getProductsFromCategoryAndQuery(categoryID, '');
    const productDetails = productObj.results
      .find((product) => product.id === id);

    this.setState({
      product: productDetails,
    });
  }

  addToCart() {
    const { product } = this.state;
    product.quantity = 1;

    this.setState({
      shoppingCart: [product],
    });
  }

  render() {

    const { product: { title, thumbnail, price } } = this.state;
    console.log(this.props);

    const { product, shoppingCart } = this.state;
    const { title, thumbnail, price } = product;

    return (
      <div>
        <p>
          <span data-testid="product-detail-name">
            { title }
            {' '}
            -
            {' '}
          </span>
          <span>
            R$
            {' '}
            { price }
          </span>
        </p>
        <img src={ thumbnail } alt="product-thumbnail" />

        <RatingForm />
        <Link to="/shopping-cart">Ir para carrinho</Link>

        <Link
          data-testid="shopping-cart-button"
          to={ {
            pathname: '/shopping-cart',
            state: shoppingCart,
          } }
        >
          Ir para carrinho
        </Link>
        <button
          type="button"
          data-testid="product-detail-add-to-cart"
          onClick={ this.addToCart }
        >
          Adicionar ao Carrinho
        </button>

      </div>
    );
  }
}

ProductDetails.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.arrayOf(),
  }).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      categoryID: PropTypes.string,
      id: PropTypes.string,
    }).isRequired,
  }).isRequired,
};

export default ProductDetails;
