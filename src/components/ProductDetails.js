import React from 'react';
import { Redirect } from 'react-router';
import PropTypes from 'prop-types';
import '../styles/components/ProductDetails.css';
import { Link } from 'react-router-dom';
import ProductEvaluation from './ProductEvaluation';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: [],
    };

    this.getItemProduct = this.getItemProduct.bind(this);
  }

  componentDidMount() {
    this.getItemProduct();
  }

  getItemProduct() {
    const { match, products } = this.props;
    const { params } = match;
    const { ship } = params;
    const product = products.find((item) => item.id === ship);
    this.setState({
      product,
    });
  }

  render() {
    const { product } = this.state;
    if (product === undefined) {
      return <Redirect to="/" />;
    }

    const { title, thumbnail, price, id, condition } = product;
    const { addProductToCart } = this.props;

    return (
      <>
        <div className="links-back-cart">
          <Link to="/">
            <button className="shopping-cart-button" type="button" alt="return-button" />
          </Link>
          <Link data-testid="shopping-cart-button" to="/shopping-cart">
            <button className="cart-header" type="button" alt="cart-button" />
          </Link>
        </div>
        <div data-testid="product-detail-name" className="card">
          <div className="img-card">
            <img src={ thumbnail } alt={ title } />
          </div>
          <div className="content-card">
            <p>{title}</p>
            <p>{`Condição ${condition ? 'NOVO' : 'default'}`}</p>
            <p>{`R$${price}`}</p>
            <div id={ id }>
              <button
                type="button"
                data-testid="product-detail-add-to-cart"
                onClick={ () => addProductToCart(id) }
              >
                Adicionar ao carrinho
              </button>
            </div>
            <ProductEvaluation />
          </div>
        </div>
      </>
    );
  }
}

ProductDetails.propTypes = {
  match: PropTypes.objectOf(PropTypes.string).isRequired,
  products: PropTypes.objectOf(PropTypes.array).isRequired,
  addProductToCart: PropTypes.func.isRequired,
};

export default ProductDetails;
