import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class SearchCard extends Component {
  render() {
    const { result, response } = this.props;
    if (response) return <div>Nenhum produto foi encontrado</div>;
    return (
      result.map(({ title, thumbnail, price, id }) => (
        <div data-testid="product" key={ id }>
          <h4>{ title }</h4>
          <img src={ thumbnail } alt={ title } />
          <p>{`R$ ${price}`}</p>
          <Link
            data-testid="product-detail-link"
            to={ {
              pathname: 'components/detalhes',
              state: { detalhes: { id, price, thumbnail, title } },
            } }
          >
            Ver detalhes
          </Link>
        </div>
      ))
    );
  }
}

SearchCard.propTypes = {
  result: PropTypes.arrayOf(PropTypes.object),
  response: PropTypes.bool,
};

SearchCard.defaultProps = [];

export default SearchCard;
