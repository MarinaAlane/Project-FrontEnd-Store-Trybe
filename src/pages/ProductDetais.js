import '../components/styles/style.css';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class ProductDetais extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(product) {
    const itemsInCart = JSON.parse(localStorage.getItem('NoMasterCart'));
    if (!itemsInCart) localStorage.setItem('NoMasterCart', JSON.stringify([product]));
    else {
      const itemsToAdd = [...itemsInCart, product];
      localStorage.setItem('NoMasterCart', JSON.stringify(itemsToAdd));
    }
  }

  render() {
    const { location: { state: { product } } } = this.props;
    const { title, price, thumbnail, attributes } = product;
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
          >
            Adicionar
          </button>
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
