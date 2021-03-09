export async function getCategories() {
  fetch("https://api.mercadolibre.com/sites/MLB/categories")
  .then(response => response.json())
  .then(data => console.log(data));
}

export async function getProductsFromCategoryAndQuery(/* categoryId, query */) {
  // Implemente aqui! Quando o fizer, descomente os parâmetros que essa função recebe
}
