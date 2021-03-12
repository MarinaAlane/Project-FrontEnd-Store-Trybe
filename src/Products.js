import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Produtcs extends React.Component {
  render() {
    const { product: { id, thumbnail, price, title } } = this.props;
    const { product } = this.props;
    const detailsLinkUrl = `/product-detail/${id}`;
    return (
      <div data-testid="product">
        <Link
          to={ { pathname: detailsLinkUrl, state: { product } } }
          data-testid="product-detail-link"
        >
          <h4>
            { title }
          </h4>
          <img src={ thumbnail } alt="imagemDoProduto" />
          <h5>
            { price }
          </h5>
        </Link>
      </div>
    );
  }
}

Produtcs.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
    title: PropTypes.string,
  }).isRequired,
};

export default Produtcs;
