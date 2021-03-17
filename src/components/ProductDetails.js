import React, { Component } from 'react';
import '../App.css';
import PropTypes from 'prop-types';

class ProductDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      comment: '',
      rating: undefined,
      feedbacks: null,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleFeedback = this.handleFeedback.bind(this);
    this.renderFeedbackSection = this.renderFeedbackSection.bind(this);
    this.checkStorage = this.checkStorage.bind(this);
    this.renderFeedbacks = this.renderFeedbacks.bind(this);
  }

  componentDidMount() {
    this.checkStorage();
  }

  componentDidUpdate() {
    const { email, comment, rating, feedbacks } = this.state;
    const unsavedFeedback = {
      email,
      comment,
      rating,
    };
    localStorage.setItem('unsavedFeedback', JSON.stringify(unsavedFeedback));
    localStorage.setItem('feedbackList', JSON.stringify(feedbacks));
  }

  handleChange({ target }) {
    this.setState({ [target.name]: target.value });
  }

  handleFeedback() {
    const unsavedFeedback = JSON.parse(localStorage.getItem('unsavedFeedback'));
    let { email } = unsavedFeedback;
    const { comment, rating } = unsavedFeedback;
    email = {
      email: {
        comment,
        rating,
      },
    };
    this.setState({ feedbacks: { ...email } });
  }

  checkStorage() {
    const feedbackList = localStorage.getItem('feedbackList');
    const unsavedFeedback = localStorage.getItem('unsavedFeedback');
    if (unsavedFeedback !== null) {
      this.setState({
        email: JSON.parse(unsavedFeedback).email,
        comment: JSON.parse(unsavedFeedback).comment,
        rating: JSON.parse(unsavedFeedback).rating,
      });
    }
    if (feedbackList !== undefined) {
      this.setState({
        feedbacks: JSON.parse(feedbackList),
      });
    }
  }

  renderFeedbacks(feedbacks) {
    console.log(feedbacks);
  }

  renderFeedbackSection() {
    const { email, comment, rating, feedbacks } = this.state;

    return (
      <form className="feedback-form">
        <h4>Avaliações</h4>
        <input
          type="email"
          name="email"
          placeholder="ribeiro.brito@google.com"
          value={ email }
          onChange={ this.handleChange }
        />
        <span>{ rating }</span>
        <input
          type="range"
          name="rating"
          min="1"
          max="5"
          value={ rating }
          onChange={ this.handleChange }
          required
        />
        <textarea
          data-testid="product-detail-evaluation"
          placeholder="Mensagem (opcional)"
          name="comment"
          value={ comment }
          onChange={ this.handleChange }
        />
        <button type="button" onClick={ this.handleFeedback }>Avaliar</button>
        { feedbacks ? this.renderFeedbacks(feedbacks) : null}
      </form>
    );
  }

  render() {
    const { location } = this.props;
    const { details } = location.state;
    const { title, price, thumbnail, sold_quantity: soldQuantity } = details;
    return (
      <div className="product-detail">
        <h2 data-testid="product-detail-name">{ `${title} - R$${price}` }</h2>
        <img alt={ `${title}` } src={ thumbnail } className="product-image" />
        <section className="specs">
          <h4>Especificações</h4>
          <ul>
            <li>{ `Unidades vendidas: ${soldQuantity}` }</li>
          </ul>
        </section>
        {this.renderFeedbackSection()}
      </div>
    );
  }
}

ProductDetails.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      details: PropTypes.shape({
        title: PropTypes.string,
        price: PropTypes.number,
        thumbnail: PropTypes.string,
        sold_quantity: PropTypes.number,
      }),
    }),
  }).isRequired,
};

export default ProductDetails;
