import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import ProductEvaluation from './ProductEvaluation';
import CartQuantity from './CartQuantity';
import carticon from './cartIcon.svg';

class ProductDetail extends React.Component {
  render() {
    const { handleProduct, location: { state: { product } } } = this.props;
    return (
      <div>
        <Link to="/">Voltar</Link>
        <Link to="/shopping-cart" data-testid="shopping-cart-button">
          <img style={ { height: '25px' } } src={ carticon } alt="Cart icon" />
          <CartQuantity totalProducts={ 10 }/>
        </Link>
        <h4 data-testid="product-detail-name">
          { product.title }
        </h4>
        <img src={ product.thumbnail } alt="imagemDoProduto" />
        <h5>
          { product.price }
        </h5>
        <h6>
          Especificações Técnicas:
        </h6>
        <ul>
          {
            product.attributes.map((attribute) => (
              <li key={ attribute.id }>
                { attribute.name }
                :
                { attribute.value_name }
              </li>))
          }
        </ul>
        <ProductEvaluation />
        <button
          type="button"
          data-testid="product-detail-add-to-cart"
          onClick={ () => handleProduct(product) }
        >
          Adicionar ao Carrinho
        </button>
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
  handleProduct: PropTypes.func.isRequired,
};
export default ProductDetail;
