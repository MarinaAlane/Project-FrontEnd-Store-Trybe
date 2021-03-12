import React from 'react';
/* Card individual com os dados do produto */
class ProductCard extends React.Component {
  render () {
    const { product } = this.props;
    return (
      <section data-testid="product">
        {/* receber um obj como props, render nome image e preço */}
        <h3>{ product.title }</h3>
        <img src={ product.thumbnail } alt="Imagem do Produto" />
        <p>{ product.price }</p>
          
      </section>
    );
  }
}
export default ProductCard;