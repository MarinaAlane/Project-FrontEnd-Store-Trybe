import React, { Component } from 'react';
import RatingEvaluation from './components/RatingEvaluation';

class ProductEvaluation extends Component {
  constructor(props) {
    super(props);

    const localEvaluation = localStorage.getItem('rating');

    this.state ={
      rating: localEvaluation,
    };

    this.handleStorageRating = this.handleStorageRating.bind(this);
  }

  handleStorageRating({ target }) {
    this.setState({
      rating: target.value,
    });
    localStorage.setItem('rating', target.value);
  }

  render() {
    const { rating } = this.state;
    return(
      <div>
        <form>
          Avaliações
          <label htmlFor="email">
            Email
            <input id="email" type="email" required/>
          </label>
          <RatingEvaluation 
            rating={ rating }
            handleStorageRating={ this.handleStorageRating }
          />
          <label htmlFor="message">
            Comentário(opcional):
            <inpunt
              id="message"
              type="text"
              data-testid="product-detail-evaluation"
              name="message"
            />
          </label>
          <button type="submit">Avaliar</button>
        </form>
      </div>
    );
  }
}

export default ProductEvaluation;
