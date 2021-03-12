import React from 'react';
class ProductCard extends React.Component {
  render () {
    const { product } = this.props;
    return (
      <section data-testid="product">
        <h3>{ product.title }</h3>
        <img src={ product.thumbnail } alt="Imagem do Produto" />
        <p>{ product.price }</p>
      </section>
    );
  }
}
export default ProductCard;
