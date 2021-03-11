import React from 'react';
import PropTypes from 'prop-types';

class Produtcs extends React.Component {
  render() {
    const { product: { thumbnail, price, title } } = this.props;
    return (
      <div data-testid="product">
        <h4>
          { title }
        </h4>
        <img src={ thumbnail } alt="imagemDoProduto" />
        <h5>
          { price }
        </h5>
      </div>
    );
  }
}

Produtcs.propTypes = {
  product: PropTypes.shape({
    thumbnail: PropTypes.string,
    price: PropTypes.number,
    title: PropTypes.string,
  }).isRequired,
};

export default Produtcs;
