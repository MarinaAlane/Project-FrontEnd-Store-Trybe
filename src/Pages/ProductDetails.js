import React from 'react';
import { Link } from 'react-router-dom';
import botaoCarrinho from '../Images/botaoCarrinho.jpg';

class ProductDetails extends React.Component {
  render() {
    const { location: { state: { product: { title, price, thumbnail } } } } = this.props;
    return (
      <div>
        <div>
          <Link to="/">Volta</Link>
          <Link data-testid="shopping-cart-button" to="/carrinho">
            <img src={ botaoCarrinho } alt="botãoCarrinhoVazio" />
          </Link>
        </div>
        <section>
          <p data-testid="product-detail-name">{`${title} - ${price}`}</p>
          <img src={ thumbnail } alt={ title } />
          <div>
            Detalhes
          </div>
        </section>
      </div>
    );
  }
}

export default ProductDetails;
