import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Button from '../Button';
import InputContext from '../InputContext';
import FreeShipping from '../FreeShipping';

class Product extends Component {
  render() {
    const { product } = this.props;
    const { title, price, thumbnail, id, attributes, shipping } = product;
    const { free_shipping: freeShipping } = shipping;
    return (
      <InputContext.Consumer>
        {
          ({ addProductToCart }) => (
            <section data-testid="product">
              <Link
                data-testid="product-detail-link"
                to={ {
                  pathname: `/details/${id}`,
                  state: { title, price, thumbnail, attributes, id, freeShipping },
                } }
              >
                <p>{ title }</p>
                <img src={ thumbnail } alt={ title } />
                <p>{ price }</p>
                {
                  freeShipping ? <FreeShipping /> : null
                }
              </Link>
              <Button
                dataTestId
                submit={ false }
                id="product-add-to-cart"
                onHandleClick={ () => addProductToCart({ title, id, thumbnail, price }) }
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

const { shape, string, number, bool } = PropTypes;

Product.propTypes = {
  product: shape({
    title: string,
    price: number,
    thumbnail: string,
    id: string,
    shipping: shape({
      free_shipping: bool.isRequired,
    }).isRequired,
  }),
}.isRequired;

export default Product;
