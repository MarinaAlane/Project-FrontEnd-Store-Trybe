import * as api from './api';

export async function cart(query, idCart) {
  const data = await api.getProductsFromQuery(query);
  data.results.forEach((product) => {
    if (product.id === idCart) {
      if (localStorage[idCart]) {
        const jsonProduct = window.localStorage.getItem(idCart);
        const product = JSON.parse(jsonProduct);
        const jsonValue = JSON.stringify({ title: product.title, value: product.value + 1 });
        localStorage.setItem(idCart, jsonValue);
      } else {
        const jsonTitle = JSON.stringify({ title: product.title, value: 1 });
        localStorage.setItem(idCart, jsonTitle);
      }
    }
  })
}