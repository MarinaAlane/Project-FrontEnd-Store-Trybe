export async function getCategories() {
  const response = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const categories = await response.json();
  return categories;
}

export async function getProductsFromCategoryAndQuery(categorieId, query) {
  const endpoint = `https://api.mercadolibre.com/sites/MLB/search?category=${categorieId}&q=${query}`;
  const response = await fetch(endpoint);
  const products = await response.json();
  return products;
}
