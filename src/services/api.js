
export async function getCategories() {
  const API_URL = 'https://api.mercadolibre.com/sites/MLB/categories';
  fetch(API_URL).then((response) => response.json()).then((data) => console.log(data));
}

export async function getProductsFromCategoryAndQuery(/* categoryId, query */) {
  // Implemente aqui! Quando o fizer, descomente os parâmetros que essa função recebe
}
