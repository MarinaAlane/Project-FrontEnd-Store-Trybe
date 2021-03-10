import React, { Component } from 'react';

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
        </div>
      ))
    );
  }
}

export default SearchCard;
