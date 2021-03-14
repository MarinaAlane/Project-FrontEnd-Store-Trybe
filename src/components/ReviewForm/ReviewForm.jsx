import React, { Component } from 'react';
import Button from '../Button';
import FormGroup from '../FormGroup/FormGroup';
import Rating from '../Rating';

export default class ReviewForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emailInput: '',
      messageInput: '',
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleRatingUpdate = this.handleRatingUpdate.bind(this);
  }

  handleInput(parentState, value) {
    this.setState({ [parentState]: value });
  }

  handleRatingUpdate(rating) {
    this.setState({ rating });
  }

  render() {
    const { emailInput, messageInput } = this.state;

    return (
      <form>
        <Rating onHandleRatingUpdate={ this.handleRatingUpdate } />
        <FormGroup
          dataTestId={ false }
          label="E-mail"
          type="email"
          id="email-input"
          parentState="emailInput"
          value={ emailInput }
          onHandleChange={ this.handleInput }
        />
        <FormGroup
          dataTestId
          label="Mensagem (opcional)"
          type="textarea"
          id="product-detail-evaluation"
          parentState="messageInput"
          value={ messageInput }
          onHandleChange={ this.handleInput }
        />
        <Button
          dataTestId={ false }
          submit
          id="submit-review-btn"
          onHandleClick={ () => {} }
        >
          Avaliar
        </Button>
      </form>
    );
  }
}
