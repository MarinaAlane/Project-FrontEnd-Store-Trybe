import React, { Component } from 'react';
import { shape, string, arrayOf, number, oneOfType } from 'prop-types';
import Button from '../../components/Button';
import InputContext from '../../components/InputContext';
import ReviewForm from '../../components/ReviewForm/ReviewForm';
import ReviewsBoard from '../../components/ReviewsBoard';
import IncrementDecrementButton from '../../components/IncrementDecrementButton';

export default class ProductDetails extends Component {
  constructor(props) {
    super(props);
    const { state: propsState } = props.location;
    this.state = {
      ...propsState,
      quantityItems: 1,
    };
    this.formatedPrice = this.formatedPrice.bind(this);
    this.updateQuantityItems = this.updateQuantityItems.bind(this);
  }

  updateQuantityItems(quantityItems) {
    this.setState({ quantityItems });
  }

  formatedPrice(price) {
    return `R$ ${price.toFixed(2)}`;
  }

  render() {
    const { title, thumbnail, price, attributes, id, availableQuantity, quantityItems } = this.state;
    const info = { title, price, thumbnail, attributes, id, availableQuantity };

    return (
      <InputContext.Consumer>
        {
          ({ addProductToCart, reviews, saveNewReview }) => (
            <>
              <h2 data-testid="product-detail-name">{title}</h2>
              <h3>{this.formatedPrice(price)}</h3>
              <img src={ thumbnail } alt={ `Thumbnail of ${title}` } />
              <IncrementDecrementButton
                value={ quantityItems }
                maxValue={ availableQuantity }
                updateQuantity={ this.updateQuantityItems }
              />
              <Button
                dataTestId
                submit={ false }
                id="product-detail-add-to-cart"
                onHandleClick={ () => (
                  addProductToCart(...Array.from({ length: quantityItems }, () => ({ ...info })))
                ) }
              >
                Adicionar ao carrinho
              </Button>
              <section>
                <h4>Descrição</h4>
                <ul>
                  { attributes.map(({ name, value_name: value }) => (
                    <li key={ name }>
                      <strong>{`${name}: `}</strong>
                      { value}
                    </li>
                  )) }
                </ul>
              </section>
              <section>
                <h4>Avaliações</h4>
                <ReviewForm id={ id } onSubmitForm={ saveNewReview } />
                <ReviewsBoard
                  reviews={ reviews
                    .find(({ id: reviewId }) => id === reviewId) || { reviews: [] } }
                />
              </section>
            </>
          )
        }
      </InputContext.Consumer>
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
