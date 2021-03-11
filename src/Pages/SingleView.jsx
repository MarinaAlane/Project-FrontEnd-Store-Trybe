import React from 'react';
import { Link } from 'react-router-dom';
import imgKart from '../Images/botaoCarrinho.jpg';
import './SingleView.css';

class SingleView extends React.Component {
  render() {
    const { location: { state: { product } } } = this.props
    const { title, price, thumbnail } = product;
    return (
      <div>
        <header>
          <nav>
            <Link to="/" >&#8678;</Link>
            <Link to="/carrinho"><img src={imgKart} alt="ShopCartImg"/></Link>
          </nav>
        </header>

        <h3 data-testid="product-detail-name">{`${title} - R$ ${price}`}</h3>

        <img src={thumbnail} alt="productSingleView"/>

        <h3>Especificações tecnicas</h3>
        <ol>
          <li>Produto muito bom, compre logo.</li>
        </ol>

      </div>
    );
  }
}

export default SingleView;
