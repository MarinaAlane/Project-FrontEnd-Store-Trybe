import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import EvaluationForm from '../components/EvaluationForm';
import Evaluations from '../components/Evaluations';

class ProductDetais extends Component {
  constructor(props) {
    super(props);

    this.state = {
      evaluations: [],
    };

    this.handleClick = this.handleClick.bind(this);
    this.newEvaluaion = this.newEvaluaion.bind(this);
  }

  handleClick(product) {
    const itemsInCart = JSON.parse(localStorage.getItem('NoMasterCart'));
    if (!itemsInCart) localStorage.setItem('NoMasterCart', JSON.stringify([product]));
    else {
      const itemsToAdd = [...itemsInCart, product];
      localStorage.setItem('NoMasterCart', JSON.stringify(itemsToAdd));
    }
  }

  newEvaluaion(evaluation) {
    const { evaluations } = this.state;
    this.setState({
      evaluations: [...evaluations, evaluation],
    });
  }

  render() {
    const { evaluations } = this.state;
    const { location: { state } } = this.props;
    if (!state) return <Redirect to="/" />;
    const { product } = state;
    const { title, price, thumbnail, attributes } = product;
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
          <button
            type="button"
            data-testid="product-detail-add-to-cart"
            onClick={ () => this.handleClick(product) }
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
