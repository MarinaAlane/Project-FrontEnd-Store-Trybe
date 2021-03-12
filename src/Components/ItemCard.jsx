import React, { Component } from 'react';

class ItemCard extends Component {
  render() {
    const { title, price, thumbnail } = this.props;
    return (
      <div data-testid="product">
        <p>{title}</p>
        <img src={ thumbnail } alt={ `${title}` } />
        <p>{price}</p>
      </div>
    );
  }
}

export default ItemCard;
