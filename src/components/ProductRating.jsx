import React, { Component } from 'react';
import Rating from '@material-ui/lab/Rating';

class ProductRating extends Component {
  constructor() {
    super();
    this.state = {
      value: null,
    };

    this.userRating = this.userRating.bind(this);
  }

  userRating(event) {
    this.setState({ value: Number(event.target.value) });
  }

  render() {
    const { value } = this.state;
    return (
      <div>
        <h3>Avaliações</h3>
        <form>
          <fieldset>
            <input placeholder="Email" type="text" />
            <Rating
              name="user-rating"
              value={ value }
              onClick={ this.userRating }
            />
            <label htmlFor="user-email">
              <textarea
                data-testid="product-detail-evaluation"
                name="message"
                placeholder="Mensagem (opcional)"
                cols="40"
                rows="5"
              />
            </label>
            <button type="button">Avaliar</button>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default ProductRating;
