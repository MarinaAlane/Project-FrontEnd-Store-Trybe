import * as api from './api';

function handleResults(data, idCart) {
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

async function cart(query, idCart) {
  if (!query) {
    const data = await api.getProductsFromCategoryAndQuery(idCart);
    handleResults(data, idCart);
  } else {
    const data = await api.getProductsFromQuery(query);
    handleResults(data, idCart);
  }
}

export default cart;
