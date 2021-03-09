import React, { Component } from 'react';

export default class CardProduct extends Component {
  constructor( props ) {
    super(props);
    
    this.state = {
      title: this.props.title,
      image: this.props.image,
      price: this.props.price,
    }
  }

  render() {
    const { title, image, price } = this.state;
    return (
      <div data-testid="product">
        <p>{ title }</p>
        <img src={ image } alt="product's image"/>
        <p>R$ { price }</p>
      </div>
    );
  }
}