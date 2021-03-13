import React, { Component } from 'react';
import Button from '../Button';
import FormGroup from '../FormGroup/FormGroup';

export default class ReviewForm extends Component {
  render() {
    return (
      <form>
        <FormGroup
          dataTestId={ false }
          label="E-mail"
          type="email"
          id="email-input"
        />
        <FormGroup
          dataTestId
          label="Mensagem (opicional)"
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
