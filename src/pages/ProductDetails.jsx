import React from 'react';
import PropTypes from 'prop-types';

class ProductDetails extends React.Component {
  render() {
    const { location: { state: { data } } } = this.props;
    const {
      title, thumbnail,
      price, attributes,
      sold_quantity: soldQuantity,
      address, available_quantity: availableQuantity 
    } = data;
    return (
      <div>
        <h1 data-testid="product-detail-name">{ title }</h1>
        <img src={ thumbnail } alt={ title } />
        {attributes.map((attribute) => (
          <p key={ attribute.id }>{`${attribute.name}: ${attribute.value_name}`}</p>
        ))}
        <p>{ `Quantidade de Itens disponíveis: ${availableQuantity}`}</p>
        <p>{ `Quantidade de itens vendidos: ${soldQuantity}` }</p>
        <p>{ `Localização: ${address.city_name},${address.state_name}`}</p>
        <p>{ `R$ ${price}` }</p>
      </div>);
  }
}

ProductDetails.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      data: PropTypes.shape({
        title: PropTypes.string.isRequired,
        thumbnail: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        sold_quantity: PropTypes.number.isRequired,
        available_quantity: PropTypes.number.isRequired,
        address: PropTypes.string.isRequired,
        attributes: PropTypes.arrayOf(PropTypes.object).isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};

export default ProductDetails;
