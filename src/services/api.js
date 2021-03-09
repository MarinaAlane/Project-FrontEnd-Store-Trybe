export async function getCategories() {
  fetch("https://api.mercadolibre.com/sites/MLB/categories")
  .then(response => response.json())
  .then(data => console.log(data));
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const API_URL = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`;
  return fetch(API_URL).then((response) => response.json());
}
