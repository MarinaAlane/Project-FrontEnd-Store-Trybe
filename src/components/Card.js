import React, { Component } from 'react';

class Card extends Component {
  render() {
    const { title, thumbnail, price } = this.props.product;
    return (
      <div data-testid="product">
        <h4>{ title }</h4>
        <img src={ thumbnail } alt="pictyre" />
        <p>
          R$: { price }
        </p>
      </div>
    );
  }
}

export default Card;
