import React from 'react';
import { Link } from 'react-router-dom';
import { bool, number, shape, string } from 'prop-types';
import ShoppingCartButton from '../components/ShoppingCartButton';
import AddToCartButton from '../components/AddToCartButton';
import AvaluatorForm from '../components/AvaluatorForm';

class Details extends React.Component {
  render() {
    const { location, match } = this.props;
    const { state } = location;
    const { product } = state;
    const { id, title, price, thumbnail, shipping } = product;
    const { free_shipping: freeShipping } = shipping;

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

  location: shape({
    state: shape({
      product: shape({
        id: string.isRequired,
        title: string.isRequired,
        price: number,
        thumbnail: string,
        shipping: shape({
          freeShipping: bool.isRequired,
        }).isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};

export default Details;
