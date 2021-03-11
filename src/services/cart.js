import * as api from './api';

async function cart(query, idCart) {
  const data = await api.getProductsFromQuery(query);
  data.results.forEach((product) => {
    if (product.id === idCart) {
      if (localStorage[idCart]) {
        const jsonProduct = window.localStorage.getItem(idCart);
        const productJ = JSON.parse(jsonProduct);
        const json = JSON.stringify({ title: productJ.title, value: productJ.value + 1 });
        localStorage.setItem(idCart, json);
      } else {
        const jsonTitle = JSON.stringify({ title: product.title, value: 1 });
        localStorage.setItem(idCart, jsonTitle);
      }
    }
  });
}

export default cart;
