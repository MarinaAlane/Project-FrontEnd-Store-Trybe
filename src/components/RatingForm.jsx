import React from 'react';
import Star from './Star';

class RatingForm extends React.Component {
  constructor(props) {
    super(props);
    const initialState = localStorage.getItem('rating');
    this.state = {
      rating: initialState,
    };
    this.setRating = this.setRating.bind(this);
  }

  setRating({ target }) {
    this.setState({
      rating: target.value,
    });
    localStorage.setItem('rating', target.value);
  }

  render() {
    const { rating } = this.state;
    return (
      <div>
        Avaliações
        <form>
          <fieldset>
            <input type="text" placeholder="E-mail" required />
            <Star rating={ rating } setRating={ this.setRating } />
            <textarea
              data-testid="product-detail-evaluation"
              name="message"
              placeholder="Mensagem (opcional)"
            />
            <button type="submit">Avaliar</button>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default RatingForm;
