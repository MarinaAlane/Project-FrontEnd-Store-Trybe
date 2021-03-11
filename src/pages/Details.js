import React from 'react';
import { Link } from 'react-router-dom';
import { shape, string } from 'prop-types';
import * as api from '../services/api';
import ShoppingCartButton from '../components/ShoppingCartButton';
import AddToCartButton from '../components/AddToCartButton';
import AvaluatorForm from '../components/AvaluatorForm';

class Details extends React.Component {
  constructor(props) {
    super(props);
    this.getProductByCategory = this.getProductByCategory.bind(this);

    this.state = {
      product: {},
      freeShipping: false,
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
    const { shipping } = product;
    this.setState({
      product,
      freeShipping: shipping.free_shipping,
    });
  }

  render() {
    const { product, freeShipping } = this.state;
    const { id, title, price, thumbnail } = product;
    const { match } = this.props;
    const { params } = match;
    const { idCategory, idProduct } = params;
    return (
      <section>
        <img src={ thumbnail } alt={ title } />
        <p data-testid="product-detail-name">{title}</p>
        <p>{price}</p>
        {freeShipping && <p data-testid="free-shipping">Frete Grátis</p>}
        <Link to="/">Home</Link>
        <ShoppingCartButton idProduct={ idProduct } idCategory={ idCategory } />
        <AddToCartButton
          datatestid="product-detail-add-to-cart"
          productData={ { id, title, price } }
        />
        <AvaluatorForm />
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
