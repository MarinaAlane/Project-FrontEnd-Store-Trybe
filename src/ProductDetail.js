import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ProductEvaluation from './ProductEvaluation';
import CartQuantity from './CartQuantity';

class ProductDetail extends React.Component {
  render() {
    const { location: { state } } = this.props;
    const { product: { attributes, thumbnail, price, title } } = state;
    return (
      <div>
        <Link to="/">Voltar</Link>
        <Link to="/shopping-cart">
          Carrinho
          <CartQuantity totalProducts={ 10 } />
        </Link>
        <h4 data-testid="product-detail-name">
          { title }
        </h4>
        <img src={ thumbnail } alt="imagemDoProduto" />
        <h5>
          { price }
        </h5>
        <h6>
          Especificações Técnicas:
        </h6>
        <ul>
          {
            attributes.map((attribute) => (
              <li key={ attribute.id }>
                { attribute.name }
                :
                { attribute.value_name }
              </li>))
          }
        </ul>
        <ProductEvaluation />
      </div>
    );
  }
}
ProductDetail.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      product: PropTypes.shape({
        id: PropTypes.string,
        attributes: PropTypes.arrayOf(),
        thumbnail: PropTypes.string,
        price: PropTypes.number,
        title: PropTypes.string,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};
export default ProductDetail;
