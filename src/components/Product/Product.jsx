import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Button from '../Button';
import InputContext from '../InputContext';

class Product extends Component {
  render() {
    const { product } = this.props;
    const { title, price, thumbnail, id, attributes } = product;
    return (
      <InputContext.Consumer>
        {
          ({ addProductToCart }) => (
            <section data-testid="product">
              <Link
                data-testid="product-detail-link"
                to={ {
                  pathname: `/details/${id}`,
                  state: { title, price, thumbnail, attributes },
                } }
              >
                <p>{ title }</p>
                <img src={ thumbnail } alt={ title } />
                <p>{ price }</p>
              </Link>
              <Button
                dataTestId="product-add-to-cart"
                submit={ false }
                id="add-to-cart-btn"
                onHandleClick={ () => addProductToCart(id) }
              >
                Adicionar ao carrinho
              </Button>
            </section>
          )
        }
      </InputContext.Consumer>
    );
  }
}

const { shape, string, number } = PropTypes;

Product.propTypes = {
  product: shape({
    title: string,
    price: number,
    thumbnail: string,
    id: string,
  }),
}.isRequired;

export default Product;
