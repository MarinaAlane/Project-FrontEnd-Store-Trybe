import React, { Component } from 'react';

class ReviewForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: 'Anônimo',
      stars: 0,
      textReview: '',
      reviews: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange({ target }) {
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const { name } = target;

    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { email, stars, textReview } = this.state;
    const newReview = {
      email,
      stars,
      textReview,
    };
    this.setState(({ reviews }) => {
      const updatedReviews = [...reviews, newReview];
      return { reviews: updatedReviews };
    });
  }

  render() {
    return (
      <div>
        <h2>Avaliação</h2>
        <form>
          <input
            type="text"
            name="email"
            placeholder="Email"
            onChange={ this.handleChange }
          />
          <select name="stars" onChange={ this.handleChange } required>
            <option value="1">1 estrela</option>
            <option value="2">2 estrela</option>
            <option value="3">3 estrela</option>
            <option value="4">4 estrela</option>
            <option value="5">5 estrela</option>
          </select>
          <br />
          <textarea
            data-testid="product-detail-evaluation"
            name="textReview"
            placeholder="Mensagem (opcional)"
            onChange={ this.handleChange }
          />
          <br />
          <input type="submit" value="Avaliar" onClick={ this.handleSubmit } />
        </form>
      </div>
    );
  }
}

export default ReviewForm;
