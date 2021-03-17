import React from 'react';
import PropTypes from 'prop-types';

class ProductDetails extends React.Component {
  render() {
    const { location: { state: { data } } } = this.props;
    const { title, thumbnail, price, attributes, sold_quantity , address, available_quantity } = data;
    console.log(this.props);
    return (
      <div>
        <h1 data-testid="product-detail-name">{ title }</h1>
        <img src={ thumbnail } alt={ title } />
        {attributes.map((attribute) => (
          <p key={ attribute.id }>{`${attribute.name}: ${attribute.value_name}`}</p>
        ))}
        <p>{ `Quantidade de Itens disponíveis: ${ available_quantity }`}</p>
        <p>{ `Quantidade de itens vendidos: ${sold_quantity}` }</p>
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
        attributes: PropTypes.arrayOf(PropTypes.object).isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};

export default ProductDetails;
