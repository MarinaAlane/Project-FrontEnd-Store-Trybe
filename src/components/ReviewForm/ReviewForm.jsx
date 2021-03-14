import React, { Component } from 'react';
import Button from '../Button';
import FormGroup from '../FormGroup/FormGroup';
import Rating from '../Rating';

export default class ReviewForm extends Component {
  render() {
    return (
      <form>
        <Rating />
        <FormGroup
          dataTestId={ false }
          label="E-mail"
          type="email"
          id="email-input"
        />
        <FormGroup
          dataTestId
          label="Mensagem (opcional)"
          type="textarea"
          id="product-detail-evaluation"
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
