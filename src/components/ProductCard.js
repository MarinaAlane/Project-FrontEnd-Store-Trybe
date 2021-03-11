import React from 'react';
/* Card individual com os dados do produto */
class ProductCard extends React.Component {
  render () {
    const { product } = this.props;
    return (
      <section data-testid="product">
        {/* receber um obj como props, render nome image e preço */}
        <h3>{/* titulo/nome */}</h3>
        <img src={{/* imagem do prosuto */}} alt="Imagem do Produto" />
        <p>{/* preço */}</p>
          
      </section>
    );
  }
}
export default ProductCard;