import React from 'react';
import PropTypes from 'prop-types';

class Detalhes extends React.Component {
  render() {
    const { location: { state: { detalhes: { id, price, thumbnail, title,
    } } } } = this.props;
    return (
      <div data-testid="product" key={ id }>
        <h4 data-testid="product-detail-name">{ title }</h4>
        <img src={ thumbnail } alt={ title } />
        <p>{`R$ ${price}`}</p>
      </div>
    );
  }
}

export default Detalhes;

Detalhes.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      detalhes: PropTypes.shape({
        id: PropTypes.string,
        price: PropTypes.string,
        thumbnail: PropTypes.string,
        title: PropTypes.string,
      }),
    }),
  }),
}.isRequired;
