import React, { Component } from 'react';

class ProductDetais extends Component {
  render() {
    const { location: { state: { product } } } = this.props;
    const { title, price, thumbnail, attributes } = product;
    const { name, value_name} = attributes;
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
                  key={ name }
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

export default ProductDetais;
