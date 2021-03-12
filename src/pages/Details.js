import React from 'react';
import { Link } from 'react-router-dom';
import { shape, string } from 'prop-types';
import * as api from '../services/api';
import ShoppingCartButton from '../components/ShoppingCartButton';
import AddToCartButton from '../components/AddToCartButton';
import EvaluatorForm from '../components/EvaluatorForm';

class Details extends React.Component {
  constructor(props) {
    super(props);
    this.getProductByCategory = this.getProductByCategory.bind(this);

    this.state = {
      product: {},
    };
  }

  componentDidMount() {
    this.getProductByCategory();
  }

  async getProductByCategory() {
    const { match } = this.props;
    const { params } = match;
    const { idCategory, idProduct } = params;

    const fecthProducts = await api.getProductsFromCategoryAndQuery(idCategory, '');
    const product = fecthProducts.results.find(({ id }) => id === idProduct);
    this.setState({
      product,
    });
  }

  render() {
    const { product } = this.state;
    const {
      id,
      title,
      price,
      thumbnail,
      available_quantity: availableQuantity } = product;
    const { match } = this.props;
    const { params } = match;
    const { idCategory, idProduct } = params;
    return (
      <section>
        <img src={ thumbnail } alt={ title } />
        <p data-testid="product-detail-name">{title}</p>
        <p>{price}</p>
        <Link to="/">Home</Link>
        <ShoppingCartButton idProduct={ idProduct } idCategory={ idCategory } />
        <AddToCartButton
          datatestid="product-detail-add-to-cart"
          productData={ { id, title, price, availableQuantity } }
        />
        <EvaluatorForm />
      </section>
    );
  }
}

Details.propTypes = {
  match: shape({
    params: shape({
      idCategory: string.isRequired,
      idProduct: string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default Details;
