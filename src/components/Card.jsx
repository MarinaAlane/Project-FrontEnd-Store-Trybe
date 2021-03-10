import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NothingFound from './NothingFound';

class Card extends Component {
  render() {
    const { productsContent, status } = this.props;
    if (productsContent.length === 0 && status === true) {
      return <NothingFound />;
    }
    const map = productsContent.map((currentValue) => (
      <div key={ currentValue.id } data-testid="product">
        <p>{currentValue.title}</p>
        <img src={ currentValue.thumbnail } alt="product-sample" />
        <p>{currentValue.price}</p>
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
