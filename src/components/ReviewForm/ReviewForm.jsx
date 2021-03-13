import React, { Component } from 'react';
import Button from '../Button';
import FormGroup from '../FormGroup/FormGroup';

export default class ReviewForm extends Component {
  render() {
    return (
      <form>
        <FormGroup
          dataTestId
          label="E-mail"
          type="email"
          id="product-detail-evaluation"
        />
        <Button
          submit
        >
          Avaliar
        </Button>
      </form>
    );
  }
}
