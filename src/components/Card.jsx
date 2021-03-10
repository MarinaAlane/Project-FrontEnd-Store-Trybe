import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NothingFound from './NothingFound';

class Card extends Component {
  render() {
    const { productsContent } = this.props;
    if (productsContent.length === 0) {
      return <NothingFound />;
    }
    const map = productsContent.map((currentValue) => (
      <div key={ currentValue.id }>
        <p data-testid="product">{currentValue.title}</p>
        <img data-testid="product" src={ currentValue.thumbnail } alt="product-sample" />
        <p data-testid="product">{currentValue.price}</p>
      </div>
    ));
    return (<div>{map}</div>);
  }
}

Card.propTypes = {
  productsContent: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    img: PropTypes.string,
  }),
}.isRequired;

export default Card;
