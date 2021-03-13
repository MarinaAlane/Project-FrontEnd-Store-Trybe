import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { string, arrayOf, object } from 'prop-types';

class ProductDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartProducts: props.location.state.cartProducts,
    };
    this.addProductToCart = this.addProductToCart.bind(this);
  }

  addProductToCart(product) {
    const { cartProducts } = this.state;
    if (cartProducts.some((cartProduct) => cartProduct.id === product.id)) {
      const newCartProducts = cartProducts.map((cartProduct) => {
        if (cartProduct.id === product.id) {
          return { ...cartProduct, quantity: cartProduct.quantity + 1 };
        }
        return cartProduct;
      });
      this.setState({ cartProducts: newCartProducts });
    } else {
      product.quantity = 1;
      this.setState((state) => ({
        cartProducts: [...state.cartProducts, product],
      }));
    }
  }

  render() {
    const { location: { state: { product } } } = this.props;
    const { title, thumbnail, price, attributes } = product;
    const { cartProducts } = this.state;
    return (
      <div>
        <img src={ thumbnail } alt={ title } />
        <h3 data-testid="product-detail-name">{ title }</h3>
        <p>{ `R$ ${price}` }</p>
        {attributes.map((attribute) => (
          <p key={ attribute.id }>{ `${attribute.name}: ${attribute.value_name}` }</p>
        ))}
        <button
          type="button"
          data-testid="product-detail-add-to-cart"
          onClick={ () => this.addProductToCart(product) }
        >
          Adicionar ao carrinho
        </button>
        <Link
          data-testid="shopping-cart-button"
          to={ {
            pathname: '/shopping-cart',
            state: { cartProducts },
          } }
        >
          Carrinho de compras
        </Link>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  title: string,
  thumbnail: string,
  price: string,
  attributes: arrayOf(object),
}.isRequired;

export default ProductDetails;
