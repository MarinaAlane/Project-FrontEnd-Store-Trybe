import React from 'react';
import PropTypes from 'prop-types';
// import { Redirect } from 'react-router-dom';
import '../CSS/ProductList.css';
import { Link } from 'react-router-dom';

class ProductCard extends React.Component {
  render() {
    const { products, onClick } = this.props;
    const isFreeShipping = <span data-testid="free-shipping">Frete Gratis!</span>;
    return (
      <div>
        {
          products
            .map(({
              id,
              title,
              thumbnail,
              price,
              category_id: categoryId,
              shipping: { free_shipping: freeShipping },
            }) => (
              <div className="product" data-testid="product" key={ id }>
                <p>{ title }</p>
                <img src={ thumbnail } alt="produto" />
                <p>{ price }</p>
                { (freeShipping) ? isFreeShipping : '' }
                <button
                  data-testid="product-add-to-cart"
                  type="button"
                  onClick={ () => onClick(id) }
                >
                  Comprar
                </button>
                <Link
                  to={ `product-detail/${categoryId}/${id}` }
                  data-testid="product-detail-link"
                >
                  Ver detalhes
                </Link>

              </div>))
        }

      </div>
    );
  }
}

ProductCard.propTypes = {
  products: PropTypes.arrayOf().isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ProductCard;
