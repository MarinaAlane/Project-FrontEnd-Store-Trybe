// nome do produto, imagem, preço e especificação técnica
// Adicione o atributo data-testid com o valor product-detail-name
// no elemento que possui o nome do produto na tela de detalhes.

import React from 'react';
import { Link } from 'react-router-dom';
import * as api from '../services/api';

class ProductDetails extends React.Component {
  constructor() {
    super();

    this.state = {
      product: [],
    };
  }

  async componentDidMount() {
    const { match: { params: { categoryID, id } } } = this.props;
    const productObj = await api.getProductsFromCategoryAndQuery(categoryID, '');
    const productDetails = productObj.results
      .find((product) => product.id === id);
    this.setState({
      product: productDetails,
    });
  }

  render() {
    const { product: { title, thumbnail, price } } = this.state;
    return (
      <div>
        <p>
          <span data-testid="product-detail-name">
            { title }
            {' '}
            -
            {' '}
          </span>
          <span>
            R$
            {' '}
            { price }
          </span>
        </p>
        <img src={ thumbnail } alt="product-thumbnail" />
        <Link to="/shopping-cart">Carrinho</Link>
      </div>
    );
  }
}

export default ProductDetails;
