import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as api from '../services/api';
import RatingForm from './RatingForm';

class ProductDetails extends React.Component {
  constructor() {
    super();
    this.fetchCategory = this.fetchCategory.bind(this);

    this.state = {
      product: [],
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

  render() {
    const { product: { title, thumbnail, price } } = this.state;
    console.log(this.props);
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
      </div>
    );
  }
}
// teste1
ProductDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      categoryID: PropTypes.string,
      id: PropTypes.string,
    }).isRequired,
  }).isRequired,
};

export default ProductDetails;
