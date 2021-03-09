export async function getCategories() {
  const categoriesApi = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const categoriesApiJson = categoriesApi.json();
  return categoriesApiJson;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const urlApi = 'https://api.mercadolibre.com/sites/MLB/search?category=';
  const categorieAndQueryApi = await fetch(`${urlApi}${categoryId}_ID&q=${query}`);
  const categorieAndQueryApiJson = categorieAndQueryApi.json();
  return categorieAndQueryApiJson;
}
