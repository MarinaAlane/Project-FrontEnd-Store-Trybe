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
      rating: 0,
    };
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(parentState, value) {
    this.setState({ [parentState]: value });
  }

  render() {
    const { emailInput, messageInput, rating } = this.state;

    return (
      <form>
        <Rating value={ rating } />
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
