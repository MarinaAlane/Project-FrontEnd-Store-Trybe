import React from 'react';
// import { Redirect } from 'react-router-dom';
// import Proptypes from 'prop-types';

class ProductDetails extends React.Component {
  render() {
    // const { productItem } = this.props;
    // const { id, title, price, thumbnail } = productItem;
    return (
      <div>
        <h1 data-testid="product-detail-name">Nome do produto</h1>
        <img src="imagem do produto" alt="imagem do produto" />
        <p>Preço do produto</p>
        <p>Especificação técnica</p>
        <input
          type="button"
          onClick={ this.redirectToShopCart }
          value="Carrinho de compras"
        />
      </div>
    );
  }
}

/*
ProductDetails.propTypes = {
  title: Proptypes.string.isRequired,
  price: Proptypes.number.isRequired,
  thumbnail: Proptypes.string.isRequired,
};
*/

export default ProductDetails;
