export async function getCategories() {
  // Começando !!
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const endPoint = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`;
  const response = await fetch(endPoint);
  const object = await response.json();
  return object;
}
