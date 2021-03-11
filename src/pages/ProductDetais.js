import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProductDetais extends Component {
  render() {
    const { location: { state: { product } } } = this.props;
    const { title, price, thumbnail, attributes } = product;
    // const { name, value_name: valueName } = attributes;
    return (
      <>
        <h3 data-testid="product-detail-name">
          { title }
          - R$:
          { price }
        </h3>
        <div>
          <img src={ thumbnail } alt="Product" />
          <div>
            <p>Especificações Técnicas:</p>
            {attributes
              .map((atribut) => (
                <p
                  key={ atribut.name }
                >
                  {`${atribut.name}: ${atribut.value_name}`}
                </p>
              ))}
          </div>
        </div>
      </>
    );
  }
}

ProductDetais.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      product: PropTypes.shape({
        title: PropTypes.string,
        thumbnail: PropTypes.string,
        price: PropTypes.number,
        attributes: PropTypes.arrayOf(PropTypes.object),
      }),
    }),
  }).isRequired,
};

export default ProductDetais;
