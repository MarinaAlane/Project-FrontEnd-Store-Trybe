import '../components/styles/style.css';
import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import EvaluationForm from '../components/EvaluationForm';
import Evaluations from '../components/Evaluations';

class ProductDetais extends Component {
  constructor(props) {
    super(props);

    this.state = {
      evaluations: [],
      disableButton: false,
    };

    this.handleClick = this.handleClick.bind(this);
    this.newEvaluaion = this.newEvaluaion.bind(this);
  }

  // handleClick(product) {
  //   const itemsInCart = JSON.parse(localStorage.getItem('NoMasterCart'));
  //   if (!itemsInCart) localStorage.setItem('NoMasterCart', JSON.stringify([product]));
  //   else {
  //     const itemsToAdd = [...itemsInCart, product];
  //     localStorage.setItem('NoMasterCart', JSON.stringify(itemsToAdd));
  //   }
  // }
  handleClick(product) {
    const itemsInCart = JSON.parse(localStorage.getItem('NoMasterCart'));
    if (!itemsInCart) {
      product = { ...product, quantityToOrder: 1 };
      localStorage.setItem('NoMasterCart', JSON.stringify([product]));
    } else {
      const indexOfProduct = itemsInCart.findIndex((item) => item.id === product.id);
      // console.log(indexOfProduct);
      if (indexOfProduct >= 0) {
        itemsInCart[indexOfProduct].quantityToOrder += 1;
        localStorage.setItem('NoMasterCart', JSON.stringify(itemsInCart));
      } else {
        product = { ...product, quantityToOrder: 1 };
        const itemsToAdd = [...itemsInCart, product];
        localStorage.setItem('NoMasterCart', JSON.stringify(itemsToAdd));
      }
    }
    const { quantityToOrder, available_quantity: availableQuantity } = product;
    if (quantityToOrder >= availableQuantity) this.setState({ disableButton: true });
  }

  newEvaluaion(evaluation) {
    const { evaluations } = this.state;
    this.setState({
      evaluations: [...evaluations, evaluation],
    });
  }

  render() {
    const { evaluations, disableButton } = this.state;
    const { location: { state } } = this.props;
    if (!state) return <Redirect to="/" />;
    const { product } = state;
    const { title, price, thumbnail, attributes, shipping: { free_shipping: free } } = product;
    const arrow = ('https://cdn.iconscout.com/icon/free/png-512/reply-all-1578267-1341736.png');
    return (
      <>
        <Link to="/cart" data-testid="shopping-cart-button">
          <img
            src={ arrow }
            alt="cart"
            className="button"
          />
        </Link>
        <h3 data-testid="product-detail-name">
          { title }
          - R$:
          { price }
          { free && <p data-testid="free-shipping">Frete grátis</p> }
        </h3>
        <div>
          <img className="imgProduct" src={ thumbnail } alt="Product" />
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
          <button
            type="button"
            data-testid="product-detail-add-to-cart"
            onClick={ () => this.handleClick(product) }
            disabled={ disableButton }
          >
            Adicionar
          </button>
          <EvaluationForm onSubmit={ this.newEvaluaion } />
          <Evaluations evaluations={ evaluations } />
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
