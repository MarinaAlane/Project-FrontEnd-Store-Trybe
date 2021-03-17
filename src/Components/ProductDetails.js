import React from 'react';
import Proptypes from 'prop-types';
import ButtonCart from './ButtonCart';
import * as api from '../services/api';

class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.requireToAPI = this.requireToAPI.bind(this);
    this.state = {
      product: '',
    };
  }

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    this.requireToAPI(id);
  }

  requireToAPI(productID) {
    const localCategorie = localStorage.getItem('categorId');
    const categori = JSON.parse(localCategorie);

    const localTerm = localStorage.getItem('term');
    const term = JSON.parse(localTerm);

    const require = api.getProductsFromCategoryAndQuery(categori, term);
    require.then(({ results }) => {
      const objCorrect = results.find((currentValue) => (currentValue.id === productID));
      this.setState({ product: objCorrect });
    });
  }

  render() {
    const { product } = this.state;
    const { thumbnail, title, price } = product;
    return (
      <div>
        <h1 data-testid="product-detail-name">{ title }</h1>
        <img src={ thumbnail } alt="imagem do produto" />
        <p>{ price }</p>
        <p>Especificações técnicas:</p>
        <ButtonCart />
      </div>
    );
  }
}

ProductDetails.propTypes = {
  match: Proptypes.arrayOf(Object).isRequired,
};
export default ProductDetails;
