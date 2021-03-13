import React, { Component } from 'react';
import { shape, string, arrayOf, number, oneOfType } from 'prop-types';
import Button from '../../components/Button';
import InputContext from '../../components/InputContext';

export default class ProductDetails extends Component {
  constructor(props) {
    super(props);
    const { state: propsState } = props.location;
    this.state = { ...propsState };
    this.formatedPrice = this.formatedPrice.bind(this);
  }

  formatedPrice(price) {
    return `R$ ${price.toFixed(2)}`;
  }

  render() {
    const { title, thumbnail, price, attributes, id } = this.state;

    return (
      <>
        <h2 data-testid="product-detail-name">{ title }</h2>
        <h3>{ this.formatedPrice(price) }</h3>
        <img src={ thumbnail } alt={ `Thumbnail of ${title}` } />
        <InputContext.Consumer>
          {
            ({ addProductToCart }) => (
              <Button
                dataTestId
                submit={ false }
                id="product-detail-add-to-cart"
                onHandleClick={ () => addProductToCart({ title, id, thumbnail, price }) }
              >
                Adicionar ao carrinho
              </Button>
            )
          }
        </InputContext.Consumer>
        <section>
          <h4>Descrição</h4>
          <ul>
            {
              attributes.map(({ name, value_name: value }) => (
                <li key={ name }>
                  <strong>{ `${name}: ` }</strong>
                  { value }
                </li>
              ))
            }
          </ul>
        </section>
      </>
    );
  }
}

ProductDetails.propTypes = {
  location: shape({
    state: shape({
      title: string.isRequired,
      price: number.isRequired,
      thumbnail: string.isRequired,
      attributes: arrayOf(oneOfType([string, shape({})])).isRequired,
    }).isRequired,
  }).isRequired,
};
