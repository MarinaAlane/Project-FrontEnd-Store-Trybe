import React from 'react';
import PropTypes from 'prop-types';
import '../CSS/ProductList.css';
import { Link } from 'react-router-dom';

class ProductCard extends React.Component {
  render() {
    const { products } = this.props;
    return (
      <div>
        {
          products
            .map(({ id, title, thumbnail, price, category_id: categoryId }) => (
              <div className="product" data-testid="product" key={ id }>
                <p>{ title }</p>
                <img src={ thumbnail } alt="produto" />
                <p>{ price }</p>
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
};

export default ProductCard;
