import React, { Component } from 'react';
import { shape, string } from 'prop-types';

export default class ProductDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      title: '',
      price: 0,
      thumbnail: '',
      description: '',
    };
    this.formatedPrice = this.formatedPrice.bind(this);
  }

  async componentDidMount() {
    await this.fetchProductDetails();
  }

  async fetchProductDetails() {
    const { match } = this.props;
    const { params } = match;
    const { id } = params;
    const urlProductInfo = 'https://api.mercadolibre.com/items/$ITEM_ID';
    const urlProductDesc = 'https://api.mercadolibre.com/items/$ITEM_ID/description';

    const {
      title,
      price,
      thumbnail,
    } = await fetch(urlProductInfo.replace('$ITEM_ID', id))
      .then((response) => response.json())
      .then((response) => response)
      .catch((error) => console.log(error));
    const {
      plain_text: description,
    } = await fetch(urlProductDesc.replace('$ITEM_ID', id))
      .then((response) => response.json())
      .catch((error) => console.log(error));

    this.setState({ loading: false, title, price, thumbnail, description });
  }

  formatedPrice(price) {
    return `R$ ${price.toFixed(2)}`;
  }

  render() {
    const { title, thumbnail, price, description, loading } = this.state;

    return (
      loading
        ? <p>LOADING...</p>
        : (
          <>
            <h2 data-testid="product-detail-name">{ title }</h2>
            <h3>{ this.formatedPrice(price) }</h3>
            <img src={ thumbnail } alt={ `Thumbnail of ${title}` } />
            <section>
              <h4>Descrição</h4>
              <article>
                <p>{ description }</p>
              </article>
            </section>
          </>
        )
    );
  }
}

ProductDetails.propTypes = {
  match: shape({
    params: shape({
      id: string.isRequired,
    }).isRequired,
  }).isRequired,
};
